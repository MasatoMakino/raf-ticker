import { RAFTicker, RAFTickerEventType } from "../esm";

export class Demo {
  constructor() {
    const types = Object.values(RAFTickerEventType);
    types.forEach((type) => {
      RAFTicker.on(type, (e) => {
        consoleEvent(type, e);
      });
    });
  }
}

const consoleEvent = (type, e) => {
  console.log(`${type} : ${e.delta}, ${e.timestamp}`);
};

window.onload = () => {
  const demo = new Demo();
};
