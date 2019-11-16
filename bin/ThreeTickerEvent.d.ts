export declare enum ThreeTickerEventType {
    onBeforeTick = "onBeforeTick",
    tick = "tick",
    onAfterTick = "onAfterTick"
}
export declare class ThreeTickerEvent {
    type: ThreeTickerEventType;
    delta: number;
    timestamp: number;
    constructor(type: ThreeTickerEventType, timestamp: number, delta: number);
}
//# sourceMappingURL=ThreeTickerEvent.d.ts.map