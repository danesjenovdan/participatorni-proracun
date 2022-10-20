# PARTICIPATIVNI PRORACUN KAMPANJA

## Development

```sh
yarn
yarn dev
```

## Deployment

### Manual

Build static files: `yarn build`

To preview built app locally run `yarn preview`.

To deploy to production just statically serve files from the `dist` directory. You may need to configure the server to support client-side routing, like always serving `index.html`.

### Using Docker:

Build image: `docker build . -t pp-kampanja`)

Run the container, for example: `docker run pp-kampanja`

When running the image the server will listen at port `80`.
