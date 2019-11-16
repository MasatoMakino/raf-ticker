export declare enum RAFTickerEventType {
    onBeforeTick = "onBeforeTick",
    tick = "tick",
    onAfterTick = "onAfterTick"
}
export declare class RAFTickerEvent {
    type: RAFTickerEventType;
    delta: number;
    timestamp: number;
    constructor(type: RAFTickerEventType, timestamp: number, delta: number);
}
//# sourceMappingURL=RAFTickerEvent.d.ts.map