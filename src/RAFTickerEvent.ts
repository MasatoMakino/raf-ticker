export interface RAFTickerEventMap {
  onBeforeTick: (e: RAFTickerEventContext) => void;
  tick: (e: RAFTickerEventContext) => void;
  onAfterTick: (e: RAFTickerEventContext) => void;
}

export class RAFTickerEventContext {
  public delta: number;
  public timestamp: number;
  constructor(timestamp: number, delta: number) {
    this.timestamp = timestamp;
    this.delta = delta;
  }
}
