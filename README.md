# unplugin-lottie

[![NPM version](https://img.shields.io/npm/v/unplugin-lottie?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-lottie)

Lottie Plugin for [unplugin](https://github.com/unjs/unplugin).

## Install

```bash
npm i -d unplugin-lottie
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginLottie from 'unplugin-lottie/vite'

export default defineConfig({
  plugins: [
    UnpluginLottie({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginLottie from 'unplugin-lottie/rollup'

export default {
  plugins: [
    UnpluginLottie({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-lottie/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-lottie/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-lottie/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginLottie from 'unplugin-lottie/esbuild'

build({
  plugins: [UnpluginLottie()],
})
```

<br></details>
