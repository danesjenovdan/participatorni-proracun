# PARTICIPATIVNI PRORACUN KAMPANJA

## Development

### Using docker compose

- Just run:

```sh
docker compose up
```

### Locally

- Make sure you have Node.js v22 and yarn installed
- Install dependencies and start the dev server with:

```sh
yarn
yarn dev
```

## Deployment

### Using Docker

- Build the image:

```sh
docker build . -t pp-kampanja
```

- Run the container (server will listen on port `3000`):

```sh
docker run -p 3000:3000 pp-kampanja
```
