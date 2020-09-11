# RAF-ticker

> A simple ticker with requestAnimationFrame.

[![Maintainability](https://api.codeclimate.com/v1/badges/1b76d40aaf6bf61c28f0/maintainability)](https://codeclimate.com/github/MasatoMakino/raf-ticker/maintainability)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MasatoMakino&repo=raf-ticker&show_owner=true)](https://github.com/MasatoMakino/raf-ticker)

## Getting Started

### Install

```bash
$ npm install https://github.com/MasatoMakino/raf-ticker.git -D
```

### How to use

```js
import { RAFTicker, RAFTickerEventType } from "raf-ticker";

RAFTicker.on(RAFTickerEventType.tick, (e) => {
  console.log(e);
});
```

[API document](https://masatomakino.github.io/raf-ticker/api/)

## License

[MIT licensed](LICENSE).
