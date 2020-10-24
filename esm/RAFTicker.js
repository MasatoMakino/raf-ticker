import { RAFTickerEvent, RAFTickerEventType } from "./RAFTickerEvent";
import EventEmitter from "eventemitter3";
export class RAFTicker {
    static initialize() {
        if (this._dispatcher != null)
            return;
        this._dispatcher = new EventEmitter();
        RAFTicker.onTick(performance.now());
    }
    static reset() {
        this._dispatcher.removeAllListeners();
        this._dispatcher = null;
        this._dispatcher = new EventEmitter();
        RAFTicker.onTick(performance.now());
    }
    static addListener(type, listener) {
        this._dispatcher.on(type, listener);
    }
    /**
     *
     * @param type
     * @param listener
     */
    static hasListener(type, listener) {
        const listeners = this._dispatcher.listeners(type);
        return listeners.includes(listener);
    }
    /**
     * Removes the specified listener
     *
     * @param type
     * @param listener
     */
    static removeListener(type, listener) {
        this._dispatcher.removeListener(type, listener);
    }
    /**
     * イベントを発効する。
     * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。
     *
     * @param type
     * @param event
     */
    static emit(type, event) {
        this._dispatcher.emit(type, event);
    }
}
/**
 * Alias for addListener
 *
 * @param type
 * @param listener
 */
RAFTicker.on = RAFTicker.addListener;
/**
 * Alias for addListener
 *
 * @deprecated use addListener
 * @param type
 * @param listener
 */
RAFTicker.addEventListener = RAFTicker.addListener;
/**
 * Alias for hasListener
 *
 * @deprecated use hasListener
 * @param type
 * @param listener
 */
RAFTicker.hasEventListener = RAFTicker.hasListener;
/**
 * Alias for removeListener
 *
 * @param type
 * @param listener
 */
RAFTicker.off = RAFTicker.removeListener;
/**
 * Alias for removeListener
 *
 * @deprecated use removeListener
 * @param type
 * @param listener
 */
RAFTicker.removeEventListener = RAFTicker.removeListener;
RAFTicker.onTick = (timestamp) => {
    if (RAFTicker._lastUpdateTimestamp == null) {
        RAFTicker._lastUpdateTimestamp = timestamp;
    }
    const delta = timestamp - RAFTicker._lastUpdateTimestamp;
    RAFTicker.emit(RAFTickerEventType.onBeforeTick, new RAFTickerEvent(timestamp, delta));
    RAFTicker.emit(RAFTickerEventType.tick, new RAFTickerEvent(timestamp, delta));
    RAFTicker.emit(RAFTickerEventType.onAfterTick, new RAFTickerEvent(timestamp, delta));
    RAFTicker._lastUpdateTimestamp = timestamp;
    RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);
};
RAFTicker.initialize();
