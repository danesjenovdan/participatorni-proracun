# PARTICIPATIVNI PRORACUN KAMPANJA

## Development

```sh
yarn
yarn dev
```

## Deployment

### Manual

Build static files: `yarn build`

To preview built app locally run `yarn preview`

To deploy to production just run `yarn start`

### Using Docker:

Build image: `docker build . -t pp-kampanja`

Run the container, for example: `docker run pp-kampanja`

When running the image the server will listen on port `3000`
