import { RAFTicker } from "..";

export class Demo {
  constructor() {
    const types = ["onBeforeTick", "tick", "onAfterTick"];
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
