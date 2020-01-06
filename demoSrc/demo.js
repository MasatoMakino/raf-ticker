import { RAFTicker, RAFTickerEventType } from "../esm";

export class Demo {
  constructor() {
    RAFTicker.addEventListener(RAFTickerEventType.onBeforeTick, e => {
      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);
    });

    RAFTicker.addEventListener(RAFTickerEventType.tick, e => {
      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);
    });

    RAFTicker.addEventListener(RAFTickerEventType.onAfterTick, e => {
      console.log(`${e.type} : ${e.delta}, ${e.timestamp}`);
    });
  }
}

window.onload = () => {
  const demo = new Demo();
};
