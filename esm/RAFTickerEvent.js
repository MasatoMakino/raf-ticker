export var RAFTickerEventType;
(function (RAFTickerEventType) {
    RAFTickerEventType["onBeforeTick"] = "onBeforeTick";
    RAFTickerEventType["tick"] = "tick";
    RAFTickerEventType["onAfterTick"] = "onAfterTick";
})(RAFTickerEventType || (RAFTickerEventType = {}));
export class RAFTickerEvent {
    constructor(timestamp, delta) {
        this.timestamp = timestamp;
        this.delta = delta;
    }
}
