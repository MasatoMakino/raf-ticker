export declare enum RAFTickerEventType {
    onBeforeTick = "onBeforeTick",
    tick = "tick",
    onAfterTick = "onAfterTick"
}
export declare class RAFTickerEvent {
    delta: number;
    timestamp: number;
    constructor(timestamp: number, delta: number);
}
//# sourceMappingURL=RAFTickerEvent.d.ts.map