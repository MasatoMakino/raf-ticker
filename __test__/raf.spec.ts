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
    expect(mockTick.mock.results[0].value.delta).toBeCloseTo(1000 / 60);
    mockTick.mockClear();

    requestAnimationFrameMock.trigger();
    expect(mockTick).toBeCalled();
    expect(mockTick.mock.results[0].value.timestamp).toBeCloseTo(
      (1000 * 2) / 60
    );
    expect(mockTick.mock.results[0].value.delta).toBeCloseTo(1000 / 60);
  });
});
