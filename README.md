# ginza

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).





## Production
1. `npm run generate`
1. package.json -> scripts -> `"now-build": "cd dist/"`
1. `package.json`:
  ```
    "scripts": {
      ...
      "now-build": "cd dist/"
    }
  ```
1. `now.json`:
  ```
    {
      "version": 2,
      "builds": [
        { "src": "package.json", "use": "@now/static-build" }
      ]
    }
  ```
1. To deploy to production, run `now`, or `now --prod` with our command-line interface.