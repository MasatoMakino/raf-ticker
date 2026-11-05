import { describe, beforeEach, test, expect, vi } from "vitest";
import { RAFTicker, RAFTickerEventContext } from "../src/index.js";
import { requestAnimationFrameMock } from "./RequestAnimationFrameMockSession.js";

describe("raf", () => {
  beforeEach(() => {
    requestAnimationFrameMock.reset();
    RAFTicker.reset();
  });

  test("emitTickEvent dispatches tick while stopped, and start resumes ticks on animation frames", () => {
    RAFTicker.stop();
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);
    RAFTicker.emitTickEvent(1000);
    expect(mockTick).toBeCalled();
    mockTick.mockClear();

    RAFTicker.start();
    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
  });

  test("tick reports the frame timestamp and the delta from the previous frame", () => {
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

  test("a second initialize keeps registered listeners", () => {
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);

    RAFTicker.initialize();

    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
  });

  test("off removes the listener, so the next frame does not call it", () => {
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    RAFTicker.on("tick", mockTick);
    RAFTicker.off("tick", mockTick);
    expect(RAFTicker.hasListener("tick", mockTick)).toBe(false);

    requestAnimationFrameMock.trigger();
    expect(mockTick).not.toBeCalled();
  });

  test("hasListener is false before on and true after on", () => {
    const mockTick = vi.fn((e: RAFTickerEventContext) => e);
    expect(RAFTicker.hasListener("tick", mockTick)).toBeFalsy();
    RAFTicker.on("tick", mockTick);
    expect(RAFTicker.hasListener("tick", mockTick)).toBe(true);
  });
});
