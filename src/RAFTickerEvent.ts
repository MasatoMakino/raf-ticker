export enum RAFTickerEventType {
  onBeforeTick = "onBeforeTick",
  tick = "tick",
  onAfterTick = "onAfterTick",
}

export class RAFTickerEvent {
  public delta: number;
  public timestamp: number;
  constructor(timestamp: number, delta: number) {
    this.timestamp = timestamp;
    this.delta = delta;
  }
}
