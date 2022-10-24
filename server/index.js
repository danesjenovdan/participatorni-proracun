import "make-promises-safe";
import { statSync, createReadStream, readFileSync } from "fs";
import { resolve, join } from "path";
import { fastify as createFastify } from "fastify";
import fastifyStatic from "@fastify/static";
import serverMain from "../dist/server/main.js";

const fastify = createFastify({ logger: true, ignoreTrailingSlash: true });

const dist = resolve("./dist");
const serverPackage = JSON.parse(
  readFileSync(join(dist, "server/package.json"), "utf-8")
);
const ssrManifest = JSON.parse(
  readFileSync(join(dist, "client/ssr-manifest.json"), "utf-8")
);

// serve all assets
const assets = serverPackage.ssr.assets || [];
assets.forEach((asset) => {
  const assetStat = statSync(join(dist, "client", asset));
  if (assetStat.isDirectory()) {
    fastify.register(fastifyStatic, {
      prefix: `/${asset}/`,
      root: join(dist, "client", asset),
      decorateReply: false,
    });
  } else {
    fastify.get(`/${asset}`, (request, reply) => {
      const stream = createReadStream(join(dist, "client", asset));
      reply.send(stream);
    });
  }
});

// serve rendered pages
fastify.get("/*", async (request, reply) => {
  const url = `${request.protocol}://${request.hostname}${request.url}`;

  const renderPage = serverMain.default;
  const { html, status, headers } = await renderPage(url, {
    manifest: ssrManifest,
    preload: true,
    // Anything passed here will be available in the main hook
  });

  reply.type("text/html").status(status || 200);
  if (headers) {
    reply.headers(headers);
  }
  return reply.send(html);
});

// start server
fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" }, (error) => {
  if (error) {
    fastify.log.error(error);
    process.exit(1);
  }
});
