/**
 * Based on : https://stackoverflow.com/a/62282721
 *
 * @author : htho https://stackoverflow.com/users/1635906/htho
 * @licence : CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/
 */

class RequestAnimationFrameMockSession {
  private handleCounter: number = 0;
  private queue: Map<number, Function> = new Map();
  private _now: number = 0;

  public now(): number {
    return this._now;
  }

  public requestAnimationFrame(callback: Function): number {
    const handle = this.handleCounter++;
    this.queue.set(handle, callback);
    return handle;
  }

  public cancelAnimationFrame(handle: number): void {
    this.queue.delete(handle);
  }

  private triggerNextAnimationFrame(timestamp: number): void {
    const nextEntry = this.queue.entries().next().value;
    if (nextEntry === undefined) return;

    const [nextHandle, nextCallback] = nextEntry;
    nextCallback(timestamp);
    cancelAnimationFrame(nextHandle);
  }

  public trigger(delta?: number): void {
    delta ??= 1000 / 60;
    this._now += delta;
    /**
     * rafのcallbackが自分自身で再登録する場合、無限ループが発生する。
     * そのため固定長のループとする。
     */
    const n = this.queue.size;
    for (let i = 0; i < n; i++) {
      this.triggerNextAnimationFrame(this._now);
    }
  }

  public reset(): void {
    this.queue.clear();
    this.handleCounter = 0;
    this._now = 0;
  }
}

export const requestAnimationFrameMock = new RequestAnimationFrameMockSession();
window.requestAnimationFrame =
  requestAnimationFrameMock.requestAnimationFrame.bind(
    requestAnimationFrameMock
  );
window.cancelAnimationFrame =
  requestAnimationFrameMock.cancelAnimationFrame.bind(
    requestAnimationFrameMock
  );
window.performance.now = requestAnimationFrameMock.now.bind(
  requestAnimationFrameMock
);
