import { RAFTickerEvent, RAFTickerEventType } from "./RAFTickerEvent";
import EventEmitter from "eventemitter3";

export class RAFTicker {
  private static _dispatcher: EventEmitter;
  private static _lastUpdateTimestamp: number;
  protected static _id: number;

  public static initialize() {
    if (this._dispatcher != null) return;
    this._dispatcher = new EventEmitter();
    RAFTicker.onTick(performance.now());
  }

  public static reset() {
    this._dispatcher.removeAllListeners();
    this._dispatcher = null;
    this._dispatcher = new EventEmitter();
    RAFTicker.onTick(performance.now());
  }

  static addListener(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ): void {
    this._dispatcher.on(type, listener);
  }

  /**
   * Alias for addListener
   *
   * @param type
   * @param listener
   */
  static on(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ) {
    this.addListener(type, listener);
  }

  /**
   * Alias for addListener
   *
   * @deprecated use addListener
   * @param type
   * @param listener
   */
  static addEventListener(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ) {
    this.addListener(type, listener);
  }

  /**
   *
   * @param type
   * @param listener
   */
  static hasListener(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ): boolean {
    const listeners = this._dispatcher.listeners(type);
    return listeners.includes(listener);
  }

  /**
   * Alias for hasListener
   *
   * @deprecated use hasListener
   * @param type
   * @param listener
   */
  static hasEventListener(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ): boolean {
    return this.hasListener(type, listener);
  }

  /**
   * Removes the specified listener
   *
   * @param type
   * @param listener
   */
  static removeListener(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ): void {
    this._dispatcher.removeListener(type, listener);
  }

  /**
   * Alias for removeListener
   *
   * @param type
   * @param listener
   */
  static off(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ): void {
    this.removeListener(type, listener);
  }

  /**
   * Alias for removeListener
   *
   * @deprecated use removeListener
   * @param type
   * @param listener
   */
  static removeEventListener(
    type: RAFTickerEventType,
    listener: (event: RAFTickerEvent) => void
  ): void {
    this.removeListener(type, listener);
  }

  /**
   * イベントを発効する。
   * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。
   *
   * @param type
   * @param event
   */
  public static emit(type: RAFTickerEventType, event: RAFTickerEvent): void {
    this._dispatcher.emit(type, event);
  }

  private static onTick = (timestamp?: number) => {
    if (RAFTicker._lastUpdateTimestamp == null) {
      RAFTicker._lastUpdateTimestamp = timestamp;
    }
    const delta = timestamp - RAFTicker._lastUpdateTimestamp;

    RAFTicker.emit(
      RAFTickerEventType.onBeforeTick,
      new RAFTickerEvent(timestamp, delta)
    );
    RAFTicker.emit(
      RAFTickerEventType.tick,
      new RAFTickerEvent(timestamp, delta)
    );
    RAFTicker.emit(
      RAFTickerEventType.onAfterTick,
      new RAFTickerEvent(timestamp, delta)
    );

    RAFTicker._lastUpdateTimestamp = timestamp;
    RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);
  };
}

RAFTicker.initialize();
