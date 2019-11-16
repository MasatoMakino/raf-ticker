export var ThreeTickerEventType;
(function (ThreeTickerEventType) {
    ThreeTickerEventType["onBeforeTick"] = "onBeforeTick";
    ThreeTickerEventType["tick"] = "tick";
    ThreeTickerEventType["onAfterTick"] = "onAfterTick";
})(ThreeTickerEventType || (ThreeTickerEventType = {}));
export class ThreeTickerEvent {
    constructor(type, timestamp, delta) {
        this.type = type;
        this.timestamp = timestamp;
        this.delta = delta;
    }
}
