import { RAFTicker, RAFTickerEvent, RAFTickerEventType } from "../src";
import { requestAnimationFrameMock } from "./RequestAnimationFrameMockSession";

describe("raf", () => {
  beforeEach(() => {
    requestAnimationFrameMock.reset();
    RAFTicker.reset();
  });

  test("tick", () => {
    const tickTime = 1000 / 60;
    const mockTick = jest.fn((e: RAFTickerEvent) => e);
    RAFTicker.on(RAFTickerEventType.tick, mockTick);

    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
    const result01: RAFTickerEvent = mockTick.mock.results[0].value;
    expect(result01.timestamp).toBeCloseTo(tickTime);
    expect(result01.delta).toBeCloseTo(tickTime);
    mockTick.mockClear();

    requestAnimationFrameMock.trigger();
    const result02: RAFTickerEvent = mockTick.mock.results[0].value;
    expect(result02.timestamp).toBeCloseTo(tickTime * 2);
    expect(result02.delta).toBeCloseTo(tickTime);
  });

  test("multiple initialize", () => {
    const mockTick = jest.fn((e: RAFTickerEvent) => e);
    RAFTicker.on(RAFTickerEventType.tick, mockTick);

    RAFTicker.initialize();

    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
  });

  test("remove listener", () => {
    const mockTick = jest.fn((e: RAFTickerEvent) => e);
    RAFTicker.on(RAFTickerEventType.tick, mockTick);
    RAFTicker.off(RAFTickerEventType.tick, mockTick);

    expect(RAFTicker.hasListener(RAFTickerEventType.tick, mockTick)).toBe(
      false
    );

    requestAnimationFrameMock.trigger();
    expect(mockTick).not.toBeCalled();
  });

  test("has listener", () => {
    const mockTick = jest.fn((e: RAFTickerEvent) => e);
    RAFTicker.on(RAFTickerEventType.tick, mockTick);
    expect(RAFTicker.hasListener(RAFTickerEventType.tick, mockTick)).toBe(true);
    expect(RAFTicker.hasEventListener(RAFTickerEventType.tick, mockTick)).toBe(
      true
    );
  });

  test("addEventListener", () => {
    const mockTick = jest.fn((e: RAFTickerEvent) => e);
    RAFTicker.addEventListener(RAFTickerEventType.tick, mockTick);
    expect(RAFTicker.hasListener(RAFTickerEventType.tick, mockTick)).toBe(true);
  });

  test("addEventListener", () => {
    const mockTick = jest.fn((e: RAFTickerEvent) => e);
    RAFTicker.on(RAFTickerEventType.tick, mockTick);
    RAFTicker.removeEventListener(RAFTickerEventType.tick, mockTick);
    expect(RAFTicker.hasListener(RAFTickerEventType.tick, mockTick)).toBe(
      false
    );
  });
});
