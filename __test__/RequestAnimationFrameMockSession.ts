class RequestAnimationFrameMockSession {
  handleCounter = 0;
  queue = new Map();

  requestAnimationFrame(callback) {
    const handle = this.handleCounter++;
    this.queue.set(handle, callback);
    return handle;
  }
  public cancelAnimationFrame(handle) {
    this.queue.delete(handle);
  }

  private triggerNextAnimationFrame(time) {
    const nextEntry = this.queue.entries().next().value;
    if (nextEntry === undefined) return;

    const [nextHandle, nextCallback] = nextEntry;
    nextCallback(time);
    cancelAnimationFrame(nextHandle);
  }

  public trigger(time = performance.now()) {
    /**
     * rafのcallbackが自分自身で再登録する場合、無限ループが発生する。
     * そのため固定長のループとする。
     */
    const n = this.queue.size;
    for (let i = 0; i < n; i++) {
      this.triggerNextAnimationFrame(time);
    }
  }

  reset() {
    this.queue.clear();
    this.handleCounter = 0;
  }
}

export const requestAnimationFrameMock = new RequestAnimationFrameMockSession();
window.requestAnimationFrame = requestAnimationFrameMock.requestAnimationFrame.bind(
  requestAnimationFrameMock
);
window.cancelAnimationFrame = requestAnimationFrameMock.cancelAnimationFrame.bind(
  requestAnimationFrameMock
);

// window.performance.now = requestAnimationFrameMock.now.bind( requestAnimationFrameMock );
