/**
 * Based on mrdoob/eventdispatcher.js
 * https://github.com/mrdoob/eventdispatcher.js
 * Copyright（c）mrdoob / http://mrdoob.com/
 * Licensed under MIT ( https://github.com/mrdoob/eventdispatcher.js/blob/master/LICENSE )
 */
export declare class EventDispatcher {
    private _listeners;
    addEventListener(type: string, listener: Function): void;
    hasEventListener(type: string, listener: Function): boolean;
    removeEventListener(type: string, listener: Function): void;
    dispatchEvent(event: any): void;
}
//# sourceMappingURL=EventDispatcher.d.ts.map