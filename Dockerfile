# ---
# build stage image
# ---
FROM node:16-alpine as build

# set current directory
WORKDIR /app

# install dependencies
COPY package.json yarn.lock ./
RUN yarn

# copy all files and run build
COPY . .
RUN yarn build

# ---
# actual image
# ---
FROM nginx:alpine

# copy built files from the 'build' container into the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# copy custom nginx config to support client-side routing
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
