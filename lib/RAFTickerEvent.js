"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAFTickerEvent = exports.RAFTickerEventType = void 0;
var RAFTickerEventType;
(function (RAFTickerEventType) {
  RAFTickerEventType["onBeforeTick"] = "onBeforeTick";
  RAFTickerEventType["tick"] = "tick";
  RAFTickerEventType["onAfterTick"] = "onAfterTick";
})(
  (RAFTickerEventType =
    exports.RAFTickerEventType || (exports.RAFTickerEventType = {}))
);
var RAFTickerEvent = /** @class */ (function () {
  function RAFTickerEvent(timestamp, delta) {
    this.timestamp = timestamp;
    this.delta = delta;
  }
  return RAFTickerEvent;
})();
exports.RAFTickerEvent = RAFTickerEvent;
