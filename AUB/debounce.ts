/**
 * 防抖
 * 持续触发不执行，不触发的一段时间之后再执行
 * @param fn
 * @param delay
 * @param isImmediately 是否立即执行一次
 */
export default function(fn, delay = 250, isImmediately = false) {
  let timer;
  const debounce = function(...arg) {
    if (timer) {
      clearTimeout(timer);
    }
    if (isImmediately) {
      if (!timer) {
        fn(...arg);
      }
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn(...arg);
      }, delay);
    }
  };
  debounce.cancel = function() {
    clearTimeout(timer);
    timer = null;
  };
  return debounce;
}
