import { requestAnimationFrameMock } from "./RequestAnimationFrameMockSession";
import { RAFTicker, RAFTickerEventType, RAFTickerEvent } from "../src";

describe("raf", () => {
  beforeEach(() => {
    requestAnimationFrameMock.reset();
    RAFTicker.reset();
  });

  test("tick", () => {
    const mockTick = jest.fn((e: RAFTickerEvent) => e);
    RAFTicker.on(RAFTickerEventType.tick, mockTick);
    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
  });
});
