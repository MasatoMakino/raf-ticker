import { RAFTickerEvent, RAFTickerEventType } from "./RAFTickerEvent";
import { EventDispatcher } from "./EventDispatcher";
export class RAFTicker {
  static initialize() {
    this._dispatcher = new EventDispatcher();
    RAFTicker.onTick(performance.now());
  }
  static addEventListener(type, listener) {
    this._dispatcher.addEventListener(type, listener);
  }
  static hasEventListener(type, listener) {
    return this._dispatcher.hasEventListener(type, listener);
  }
  static removeEventListener(type, listener) {
    this._dispatcher.removeEventListener(type, listener);
  }
}
RAFTicker.onTick = timestamp => {
  if (RAFTicker._lastUpdateTimestamp == null) {
    RAFTicker._lastUpdateTimestamp = timestamp;
  }
  const delta = timestamp - RAFTicker._lastUpdateTimestamp;
  RAFTicker._dispatcher.dispatchEvent(
    new RAFTickerEvent(RAFTickerEventType.onBeforeTick, timestamp, delta)
  );
  RAFTicker._dispatcher.dispatchEvent(
    new RAFTickerEvent(RAFTickerEventType.tick, timestamp, delta)
  );
  RAFTicker._dispatcher.dispatchEvent(
    new RAFTickerEvent(RAFTickerEventType.onAfterTick, timestamp, delta)
  );
  RAFTicker._lastUpdateTimestamp = timestamp;
  RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);
};
RAFTicker.initialize();
