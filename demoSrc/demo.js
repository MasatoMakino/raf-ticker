import { RAFTicker, RAFTickerEventType } from "../esm";

export class Demo {
  constructor() {
    RAFTicker.on(RAFTickerEventType.onBeforeTick, (e) => {
      console.log(
        `${RAFTickerEventType.onBeforeTick} : ${e.delta}, ${e.timestamp}`
      );
    });

    RAFTicker.on(RAFTickerEventType.tick, (e) => {
      console.log(`${RAFTickerEventType.tick} : ${e.delta}, ${e.timestamp}`);
    });

    RAFTicker.on(RAFTickerEventType.onAfterTick, (e) => {
      console.log(
        `${RAFTickerEventType.onAfterTick} : ${e.delta}, ${e.timestamp}`
      );
    });
  }
}

window.onload = () => {
  const demo = new Demo();
};
