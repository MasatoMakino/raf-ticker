export enum RAFTickerEventType {
  onBeforeTick = "onBeforeTick",
  tick = "tick",
  onAfterTick = "onAfterTick"
}

export class RAFTickerEvent {
  public type: RAFTickerEventType;
  public delta: number;
  public timestamp: number;
  constructor(type: RAFTickerEventType, timestamp: number, delta: number) {
    this.type = type;
    this.timestamp = timestamp;
    this.delta = delta;
  }
}
