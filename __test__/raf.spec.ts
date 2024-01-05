import { describe, beforeEach, test, expect, vi } from "vitest";
import { RAFTicker, RAFTickerEventContext } from "../src";
import { requestAnimationFrameMock } from "./RequestAnimationFrameMockSession";

describe("raf", () => {
  beforeEach(() => {
    requestAnimationFrameMock.reset();
    RAFTicker.reset();
  });

  test("start and stop", () => {
    RAFTicker.stop();
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);
    RAFTicker.emitTickEvent(1000);
    expect(mockTick).toBeCalled();
    mockTick.mockClear();
    expect(mockTick).not.toBeCalled();

    RAFTicker.start();
    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
  });

  test("tick", () => {
    const tickTime = 1000 / 60;
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);

    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
    const result01: RAFTickerEventContext = mockTick.mock.results[0].value;
    expect(result01.timestamp).toBeCloseTo(tickTime);
    expect(result01.delta).toBeCloseTo(tickTime);
    mockTick.mockClear();

    requestAnimationFrameMock.trigger();
    const result02: RAFTickerEventContext = mockTick.mock.results[0].value;
    expect(result02.timestamp).toBeCloseTo(tickTime * 2);
    expect(result02.delta).toBeCloseTo(tickTime);
  });

  test("multiple initialize", () => {
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);

    RAFTicker.initialize();

    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
  });

  test("remove listener", () => {
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);
    expect(RAFTicker.hasListener("tick", mockTick)).toBe(true);
    RAFTicker.off("tick", mockTick);
    expect(RAFTicker.hasListener("tick", mockTick)).toBe(false);

    requestAnimationFrameMock.trigger();
    expect(mockTick).not.toBeCalled();
  });

  test("has listener", () => {
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    expect(RAFTicker.hasListener("tick", mockTick)).toBeFalsy();
    RAFTicker.on("tick", mockTick);
    expect(RAFTicker.hasListener("tick", mockTick)).toBe(true);
  });

  test("removeEventListener", () => {
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);
    RAFTicker.removeListener("tick", mockTick);
    expect(RAFTicker.hasListener("tick", mockTick)).toBe(false);
  });
});
