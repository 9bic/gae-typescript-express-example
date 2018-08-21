# gae-typescript-express-example

[![Greenkeeper badge](https://badges.greenkeeper.io/9bic/gae-typescript-express-example.svg)](https://greenkeeper.io/)

- GAE standard for node8 with typescript examples
- `prestart` scripts transpile automatically .ts to .js, when deployed to GAE.
- when local development is served with nodemon and ts-node
  - run `npm run watch`

``` package.json
:
"scripts": {
  "prestart": "tsc",
  "start": "node dist/index.js",
  "watch": "nodemon",
  "test": "jest"
:
```