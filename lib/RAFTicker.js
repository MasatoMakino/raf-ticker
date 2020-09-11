"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAFTicker = void 0;
var RAFTickerEvent_1 = require("./RAFTickerEvent");
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var RAFTicker = /** @class */ (function () {
    function RAFTicker() {
    }
    RAFTicker.initialize = function () {
        if (this._dispatcher != null)
            return;
        this._dispatcher = new eventemitter3_1.default();
        RAFTicker.onTick(performance.now());
    };
    RAFTicker.reset = function () {
        this._dispatcher.removeAllListeners();
        this._dispatcher = null;
        this._dispatcher = new eventemitter3_1.default();
        RAFTicker.onTick(performance.now());
    };
    RAFTicker.addListener = function (type, listener) {
        this._dispatcher.on(type, listener);
    };
    /**
     * Alias for addListener
     *
     * @param type
     * @param listener
     */
    RAFTicker.on = function (type, listener) {
        this.addListener(type, listener);
    };
    /**
     * Alias for addListener
     *
     * @deprecated use addListener
     * @param type
     * @param listener
     */
    RAFTicker.addEventListener = function (type, listener) {
        this.addListener(type, listener);
    };
    /**
     *
     * @param type
     * @param listener
     */
    RAFTicker.hasListener = function (type, listener) {
        var listeners = this._dispatcher.listeners(type);
        return listeners.includes(listener);
    };
    /**
     * Alias for hasListener
     *
     * @deprecated use hasListener
     * @param type
     * @param listener
     */
    RAFTicker.hasEventListener = function (type, listener) {
        return this.hasListener(type, listener);
    };
    /**
     * Removes the specified listener
     *
     * @param type
     * @param listener
     */
    RAFTicker.removeListener = function (type, listener) {
        this._dispatcher.removeListener(type, listener);
    };
    /**
     * Alias for removeListener
     *
     * @param type
     * @param listener
     */
    RAFTicker.off = function (type, listener) {
        this.removeListener(type, listener);
    };
    /**
     * Alias for removeListener
     *
     * @deprecated use removeListener
     * @param type
     * @param listener
     */
    RAFTicker.removeEventListener = function (type, listener) {
        this.removeListener(type, listener);
    };
    /**
     * イベントを発効する。
     * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。
     *
     * @param type
     * @param event
     */
    RAFTicker.emit = function (type, event) {
        this._dispatcher.emit(type, event);
    };
    RAFTicker.onTick = function (timestamp) {
        if (RAFTicker._lastUpdateTimestamp == null) {
            RAFTicker._lastUpdateTimestamp = timestamp;
        }
        var delta = timestamp - RAFTicker._lastUpdateTimestamp;
        RAFTicker.emit(RAFTickerEvent_1.RAFTickerEventType.onBeforeTick, new RAFTickerEvent_1.RAFTickerEvent(timestamp, delta));
        RAFTicker.emit(RAFTickerEvent_1.RAFTickerEventType.tick, new RAFTickerEvent_1.RAFTickerEvent(timestamp, delta));
        RAFTicker.emit(RAFTickerEvent_1.RAFTickerEventType.onAfterTick, new RAFTickerEvent_1.RAFTickerEvent(timestamp, delta));
        RAFTicker._lastUpdateTimestamp = timestamp;
        RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);
    };
    return RAFTicker;
}());
exports.RAFTicker = RAFTicker;
RAFTicker.initialize();
