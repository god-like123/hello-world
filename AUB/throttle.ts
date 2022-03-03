import { requestAnimationFrame } from './utils/animationFrame';

/**
 * 节流
 * 持续触发并不会执行多次
 * 到一定时间再去执行
 */
export interface ThrottleOptions {
  leading: boolean;
  trailing: boolean;
}

export function throttle(
  fn,
  delay,
  options: Partial<ThrottleOptions> = {
    leading: true, // 表示开启第一次执行
    trailing: true //  表示开启停止触发的回调
  }
) {
  let timeout;
  let context;
  let args;
  let result;
  let previous = 0;
  if (!options) options = {};

  const later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = fn.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function(this: any) {
    const now = Date.now();
    if (!previous && options.leading === false) previous = now;
    const remaining = delay - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > delay) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = fn.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

export function throttleWithRAF(fn: (...any) => any) {
  let ticking = false;
  let callback;
  const update = function(...arg) {
    fn(...arg);
    ticking = false;
  };
  return function(...arg) {
    if (!ticking) {
      callback = callback || (() => update(...arg));
      requestAnimationFrame(callback);
    }
    ticking = true;
  };
}
