export interface RAFTickerEventMap {
  onBeforeTick: RAFTickerEventContext;
  tick: RAFTickerEventContext;
  onAfterTick: RAFTickerEventContext;
}

export class RAFTickerEventContext {
  public delta: number;
  public timestamp: number;
  constructor(timestamp: number, delta: number) {
    this.timestamp = timestamp;
    this.delta = delta;
  }
}
