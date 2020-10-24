import { RAFTickerEvent, RAFTickerEventType } from "./RAFTickerEvent";
export declare class RAFTicker {
    private static _dispatcher;
    private static _lastUpdateTimestamp;
    protected static _id: number;
    static initialize(): void;
    static reset(): void;
    static addListener(type: RAFTickerEventType, listener: (event: RAFTickerEvent) => void): void;
    /**
     * Alias for addListener
     *
     * @param type
     * @param listener
     */
    static on: typeof RAFTicker.addListener;
    /**
     * Alias for addListener
     *
     * @deprecated use addListener
     * @param type
     * @param listener
     */
    static addEventListener: typeof RAFTicker.addListener;
    /**
     *
     * @param type
     * @param listener
     */
    static hasListener(type: RAFTickerEventType, listener: (event: RAFTickerEvent) => void): boolean;
    /**
     * Alias for hasListener
     *
     * @deprecated use hasListener
     * @param type
     * @param listener
     */
    static hasEventListener: typeof RAFTicker.hasListener;
    /**
     * Removes the specified listener
     *
     * @param type
     * @param listener
     */
    static removeListener(type: RAFTickerEventType, listener: (event: RAFTickerEvent) => void): void;
    /**
     * Alias for removeListener
     *
     * @param type
     * @param listener
     */
    static off: typeof RAFTicker.removeListener;
    /**
     * Alias for removeListener
     *
     * @deprecated use removeListener
     * @param type
     * @param listener
     */
    static removeEventListener: typeof RAFTicker.removeListener;
    /**
     * イベントを発効する。
     * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。
     *
     * @param type
     * @param event
     */
    static emit(type: RAFTickerEventType, event: RAFTickerEvent): void;
    private static onTick;
}
//# sourceMappingURL=RAFTicker.d.ts.map