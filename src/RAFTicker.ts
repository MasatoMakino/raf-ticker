import { RAFTickerEvent, RAFTickerEventType } from "./RAFTickerEvent";
import { EventDispatcher } from "./EventDispatcher";

export class RAFTicker {
  private static _dispatcher: EventDispatcher;
  private static _lastUpdateTimestamp: number;
  protected static _id: number;

  public static initialize() {
    this._dispatcher = new EventDispatcher();
    RAFTicker.onTick(performance.now());
  }

  static addEventListener(
    type: string,
    listener: (event: Event) => void
  ): void {
    this._dispatcher.addEventListener(type, listener);
  }

  static hasEventListener(
    type: string,
    listener: (event: Event) => void
  ): boolean {
    return this._dispatcher.hasEventListener(type, listener);
  }

  static removeEventListener(
    type: string,
    listener: (event: Event) => void
  ): void {
    this._dispatcher.removeEventListener(type, listener);
  }

  private static onTick = (timestamp?: number) => {
    if (RAFTicker._lastUpdateTimestamp == null) {
      RAFTicker._lastUpdateTimestamp = timestamp;
    }
    const delta = timestamp - RAFTicker._lastUpdateTimestamp;

    RAFTicker._dispatcher.dispatchEvent(
      new RAFTickerEvent(RAFTickerEventType.onBeforeTick, timestamp, delta)
    );
    RAFTicker._dispatcher.dispatchEvent(
      new RAFTickerEvent(RAFTickerEventType.tick, timestamp, delta)
    );
    RAFTicker._dispatcher.dispatchEvent(
      new RAFTickerEvent(RAFTickerEventType.onAfterTick, timestamp, delta)
    );

    RAFTicker._lastUpdateTimestamp = timestamp;
    RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);
  };
}

RAFTicker.initialize();
