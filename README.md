# gae-typescript-express-example

- GAE standard for node8 with typescript examples
- transpiling .ts to .js by `prestart`
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