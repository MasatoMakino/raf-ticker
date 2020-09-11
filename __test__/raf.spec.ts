import { requestAnimationFrameMock } from "./RequestAnimationFrameMockSession";
import { RAFTicker, RAFTickerEventType, RAFTickerEvent } from "../src";

describe("raf", () => {
  beforeEach(() => {
    requestAnimationFrameMock.reset();
    RAFTicker.reset();
  });

  test("tick", () => {
    const mockTick = jest.fn((e) => e);
    RAFTicker.on(RAFTickerEventType.tick, mockTick);

    requestAnimationFrameMock.triggerAllAnimationFrames();

    expect(mockTick).toBeCalled();
  });
});
