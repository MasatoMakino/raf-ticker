# RAF-ticker

> A simple ticker with requestAnimationFrame.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![CI_Main](https://github.com/MasatoMakino/raf-ticker/actions/workflows/ci_main.yml/badge.svg)](https://github.com/MasatoMakino/raf-ticker/actions/workflows/ci_main.yml)
[![npm version](https://img.shields.io/npm/v/@masatomakino/raf-ticker.svg?style=flat)](https://www.npmjs.com/package/@masatomakino/raf-ticker)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github&style=flat)](https://github.com/MasatoMakino/RAF-ticker)

## Demo

[Demo page](https://masatomakino.github.io/raf-ticker/demo/)

Open the console from your browser's developer tools.

## Getting Started

### Install

```bash
npm i @masatomakino/raf-ticker -D
```

### How to use

```js
import { RAFTicker } from "@masatomakino/raf-ticker";
```

Just import and `RAFTicker` starts.

```js
RAFTicker.on("tick", (e) => {
  console.log(e);
});
```

`RAFTicker` dispatches events every frame.

[API document](https://masatomakino.github.io/raf-ticker/api/index.html)

### Why is this package necessary?

Unification of requestAnimationFrame improves rendering performance.

https://stackoverflow.com/questions/17103785/multiple-requestanimationframe-performance

If you use multiple animation modules together, setting up a render loop in each module will increase the cost of callbacks.

> **Warning**
> Performance improvement from unifying requestAnimationFrame depends on the browser implementation. In future versions of the browser, this approach may result in performance degradation. Be sure to check performance in your actual environment.

## Development

```bash
npm run start:dev
```

A [DevContainer](https://containers.dev/) configuration is included for isolating the npm execution environment. All commands work without it.

## License

[MIT licensed](LICENSE).
