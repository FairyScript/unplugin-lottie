# unplugin-lottie

[![NPM version](https://img.shields.io/npm/v/unplugin-lottie?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-lottie)

Lottie Plugin for [unplugin](https://github.com/unjs/unplugin).

## Bundler Support

| Name    | Status                                                         |
| ------- | -------------------------------------------------------------- |
| Vite    | ![Vite](https://img.shields.io/badge/-Supported-brightgreen)   |
| Rollup  | ![Rollup](https://img.shields.io/badge/-Supported-brightgreen) |
| Webpack | ![Webpack](https://img.shields.io/badge/-Untested-blue)        |
| Nuxt    | ![Nuxt](https://img.shields.io/badge/-Untested-blue)           |
| Vue CLI | ![Vue CLI](https://img.shields.io/badge/-Untested-blue)        |
| esbuild | ![esbuild](https://img.shields.io/badge/-Untested-blue)        |

## Note

This project assumes that all of your Lottie files are in the same directory.

```
.
├── images
│   ├── img0.png
│   ├── img1.png
│   ├── ...
│   └── img5.png
└── data.json
```

## Usage

```ts
// yourProjectFile.ts
import lottieFile from 'assets/your-lottie-file/data.json?lottie'
import lottie from 'lottie-web'

lottie.loadAnimation({
  container: element, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  animationData: lottieFile, // the animation json object
})
```

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
