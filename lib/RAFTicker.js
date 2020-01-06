"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RAFTickerEvent_1 = require("./RAFTickerEvent");
var EventDispatcher_1 = require("./EventDispatcher");
var RAFTicker = /** @class */ (function() {
  function RAFTicker() {}
  RAFTicker.initialize = function() {
    this._dispatcher = new EventDispatcher_1.EventDispatcher();
    RAFTicker.onTick(performance.now());
  };
  RAFTicker.addEventListener = function(type, listener) {
    this._dispatcher.addEventListener(type, listener);
  };
  RAFTicker.hasEventListener = function(type, listener) {
    return this._dispatcher.hasEventListener(type, listener);
  };
  RAFTicker.removeEventListener = function(type, listener) {
    this._dispatcher.removeEventListener(type, listener);
  };
  RAFTicker.onTick = function(timestamp) {
    if (RAFTicker._lastUpdateTimestamp == null) {
      RAFTicker._lastUpdateTimestamp = timestamp;
    }
    var delta = timestamp - RAFTicker._lastUpdateTimestamp;
    RAFTicker._dispatcher.dispatchEvent(
      new RAFTickerEvent_1.RAFTickerEvent(
        RAFTickerEvent_1.RAFTickerEventType.onBeforeTick,
        timestamp,
        delta
      )
    );
    RAFTicker._dispatcher.dispatchEvent(
      new RAFTickerEvent_1.RAFTickerEvent(
        RAFTickerEvent_1.RAFTickerEventType.tick,
        timestamp,
        delta
      )
    );
    RAFTicker._dispatcher.dispatchEvent(
      new RAFTickerEvent_1.RAFTickerEvent(
        RAFTickerEvent_1.RAFTickerEventType.onAfterTick,
        timestamp,
        delta
      )
    );
    RAFTicker._lastUpdateTimestamp = timestamp;
    RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);
  };
  return RAFTicker;
})();
exports.RAFTicker = RAFTicker;
RAFTicker.initialize();
