# RAF-ticker

> A simple ticker with requestAnimationFrame.

[![CI_Main](https://github.com/MasatoMakino/raf-ticker/actions/workflows/ci_main.yml/badge.svg)](https://github.com/MasatoMakino/raf-ticker/actions/workflows/ci_main.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/1b76d40aaf6bf61c28f0/maintainability)](https://codeclimate.com/github/MasatoMakino/raf-ticker/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1b76d40aaf6bf61c28f0/test_coverage)](https://codeclimate.com/github/MasatoMakino/raf-ticker/test_coverage)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MasatoMakino&repo=raf-ticker&show_owner=true)](https://github.com/MasatoMakino/raf-ticker)

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
import { RAFTicker, RAFTickerEventType } from "@masatomakino/raf-ticker";
```

Just import and `RAFTicker` starts.

```js
RAFTicker.on(RAFTickerEventType.tick, (e) => {
  console.log(e);
});
```

`RAFTicker` dispatches events every frame.

[API document](https://masatomakino.github.io/raf-ticker/api/index.html)

## License

[MIT licensed](LICENSE).
