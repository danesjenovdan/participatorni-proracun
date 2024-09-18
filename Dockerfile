FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY public ./public
COPY server ./server
COPY src/ ./src
COPY .browserslistrc .prettierrc babel.config.js postcss.config.js vue.config.js ./
RUN npm run ssr:build

EXPOSE 8801

CMD ["npm", "run", "ssr:start"]
