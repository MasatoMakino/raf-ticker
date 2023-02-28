import EventEmitter from "eventemitter3";
import { RAFTickerEventMap, RAFTickerEventContext } from "./RAFTickerEvent";

export class RAFTicker {
  private static _dispatcher: EventEmitter<RAFTickerEventMap>;
  private static _lastUpdateTimestamp: number;
  protected static _id: number;

  public static initialize() {
    if (this._dispatcher == null) {
      this._dispatcher = new EventEmitter();
    }
    this.start();
  }

  public static reset() {
    this._dispatcher.removeAllListeners();
    this.stop();
    this.start();
  }

  public static start() {
    if (!RAFTicker._id) {
      this._lastUpdateTimestamp = undefined;
      RAFTicker.onTick(performance.now());
    }
  }
  public static stop() {
    cancelAnimationFrame(RAFTicker._id);
    this._id = undefined;
    this._lastUpdateTimestamp = undefined;
  }

  static addListener(
    type: keyof RAFTickerEventMap,
    listener: (event: RAFTickerEventContext) => void
  ): void {
    this._dispatcher.on(type, listener);
  }

  /**
   * Alias for addListener
   *
   * @param type
   * @param listener
   */
  static on = RAFTicker.addListener;

  /**
   *
   * @param type
   * @param listener
   */
  static hasListener(
    type: keyof RAFTickerEventMap,
    listener: (event: RAFTickerEventContext) => void
  ): boolean {
    const listeners = this._dispatcher.listeners(type);
    return listeners.includes(listener);
  }

  /**
   * Removes the specified listener
   *
   * @param type
   * @param listener
   */
  static removeListener(
    type: keyof RAFTickerEventMap,
    listener: (event: RAFTickerEventContext) => void
  ): void {
    this._dispatcher.removeListener(type, listener);
  }

  /**
   * Alias for removeListener
   *
   * @param type
   * @param listener
   */
  static off = RAFTicker.removeListener;

  /**
   * イベントを発効する。
   * この関数はアプリケーションから利用することはなく、主に単体テストのために使用する。
   *
   * @param type
   * @param event
   */
  public static emit(
    type: keyof RAFTickerEventMap,
    event: RAFTickerEventContext
  ): void {
    this._dispatcher.emit(type, event);
  }

  private static onTick = (timestamp?: number) => {
    this.emitTickEvent(timestamp);
    RAFTicker._id = requestAnimationFrame(RAFTicker.onTick);
  };

  public static emitTickEvent(timestamp?: number) {
    if (RAFTicker._lastUpdateTimestamp == null) {
      RAFTicker._lastUpdateTimestamp = timestamp;
    }
    const delta = timestamp - RAFTicker._lastUpdateTimestamp;

    this._dispatcher.emit(
      "onBeforeTick",
      new RAFTickerEventContext(timestamp, delta)
    );
    this._dispatcher.emit("tick", new RAFTickerEventContext(timestamp, delta));
    this._dispatcher.emit(
      "onAfterTick",
      new RAFTickerEventContext(timestamp, delta)
    );

    RAFTicker._lastUpdateTimestamp = timestamp;
  }
}

RAFTicker.initialize();
