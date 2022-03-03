import { canUseDOM } from '../verify';

export const requestAnimationFrame = canUseDOM
  ? window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  function(callback: Function) {
    return window.setTimeout(() => {
      callback();
    }, 17);
  }
  : () => 0;

export const cancelAnimationFrame = canUseDOM
  ? window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  function(id: number) {
    window.clearTimeout(id);
  }
  : () => 0;
