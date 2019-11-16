import { RAFTickerEvent } from "./RAFTickerEvent";
export declare class RAFTicker {
    private static _dispatcher;
    private static _lastUpdateTimestamp;
    protected static _id: number;
    static initialize(): void;
    static addEventListener(type: string, listener: (event: RAFTickerEvent) => void): void;
    static hasEventListener(type: string, listener: (event: RAFTickerEvent) => void): boolean;
    static removeEventListener(type: string, listener: (event: RAFTickerEvent) => void): void;
    private static onTick;
}
//# sourceMappingURL=RAFTicker.d.ts.map