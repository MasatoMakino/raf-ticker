import { EventDispatcher } from "three";
import { ThreeTickerEvent, ThreeTickerEventType } from "./ThreeTickerEvent";
export class ThreeTicker {
    static initialize() {
        this._dispatcher = new EventDispatcher();
        ThreeTicker.onTick(performance.now());
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
ThreeTicker.onTick = (timestamp) => {
    if (ThreeTicker._lastUpdateTimestamp == null) {
        ThreeTicker._lastUpdateTimestamp = timestamp;
    }
    const delta = timestamp - ThreeTicker._lastUpdateTimestamp;
    ThreeTicker._dispatcher.dispatchEvent(new ThreeTickerEvent(ThreeTickerEventType.onBeforeTick, timestamp, delta));
    ThreeTicker._dispatcher.dispatchEvent(new ThreeTickerEvent(ThreeTickerEventType.tick, timestamp, delta));
    ThreeTicker._dispatcher.dispatchEvent(new ThreeTickerEvent(ThreeTickerEventType.onAfterTick, timestamp, delta));
    ThreeTicker._lastUpdateTimestamp = timestamp;
    ThreeTicker._id = requestAnimationFrame(ThreeTicker.onTick);
};
ThreeTicker.initialize();
