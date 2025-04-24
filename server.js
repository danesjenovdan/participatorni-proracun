import fastifyCompress from "@fastify/compress";
import fastifyMiddie from "@fastify/middie";
import fastifyStatic from "@fastify/static";
import { fastify as createFastify } from "fastify";
// eslint-disable-next-line import/extensions, import/no-unresolved
import { transformHtmlTemplate } from "@unhead/vue/server";
import fs from "node:fs";
import path from "node:path";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? fs.readFileSync("./dist/client/index.html", "utf-8")
  : "";

(async function main() {
  const fastify = createFastify({
    logger: isProduction
      ? true
      : { transport: { target: "@fastify/one-line-logger" } },
    ignoreTrailingSlash: true,
  });

  let vite;
  if (!isProduction) {
    const { createServer } = await import("vite");
    vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
      base,
    });
    await fastify.register(fastifyMiddie);
    fastify.use(vite.middlewares);
  } else {
    await fastify.register(fastifyCompress);
    await fastify.register(fastifyStatic, {
      root: path.resolve("./dist/client"),
      prefix: base,
      wildcard: false,
    });
  }

  fastify.get("/*", async (request, reply) => {
    let { url } = request;
    if (url.startsWith(base)) {
      url = url.replace(base, "");
    }

    try {
      let template;
      let render;
      if (!isProduction) {
        template = fs.readFileSync("./index.html", "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.js")).default;
      } else {
        template = templateHtml;
        render = (await import("./dist/server/entry-server.js")).default;
      }

      const rendered = await render(url);

      const html = await transformHtmlTemplate(
        rendered.head,
        template.replace(`<!--app-html-->`, rendered.html ?? ""),
      );

      return reply.type("text/html").status(200).send(html);
    } catch (error) {
      vite?.ssrFixStacktrace(error);
      if (error.message === "404") {
        return reply.status(404).send("404 | Not Found");
      }
      throw error;
    }
  });

  fastify.listen({ port, host: "0.0.0.0" }, (error) => {
    if (error) {
      fastify.log.error(error);
      process.exit(1);
    }
  });
})();
