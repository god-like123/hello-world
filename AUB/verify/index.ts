export function isBlank(val: any) {
  return isUndef(val) || val === '' || val.toString().trim() === '';
}

export function isAllBlank(...args) {
  return args.every(arg => isBlank(arg));
}
export function isAllFull(...args) {
  return args.every(arg => !isBlank(arg));
}

export function isUndef(val) {
  return val === null || typeof val === 'undefined';
}

export function isEmptyObject(obj: any) {
  return !obj || Object.keys(obj).length <= 0;
}

const objToString = Object.prototype.toString;

/**
 * 判断是纯粹的对象，通过 "{}" 或者 "new Object" 创建的
 * @param val
 */
export function isPlainObject(val) {
  if (!isObject(val)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

export function isTypeObject(obj) {
  return obj !== null && typeof obj === 'object';
}

export function isObject(obj) {
  return objToString.call(obj) === '[object Object]';
}
export function isArray(obj) {
  return objToString.call(obj) === '[object Array]';
}

export function isDate(value) {
  return objToString.call(value) === '[object Date]';
}

export function isFunction(value) {
  return objToString.call(value) === '[object Function]';
}

export function isFormData(value) {
  return objToString.call(value) === '[object FormData]';
}

export function isFile(value) {
  return objToString.call(value) === '[object File]';
}

export function isEmptyArray(obj) {
  return !isArray(obj) || obj.length <= 0;
}

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export function isTouchScreen() {
  return canUseDOM && 'ontouchstart' in document.documentElement;
}

// 判断是否为 Email
export function isEmail(value) {
  const reg = /^\s*\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*\s*$/;
  return reg.test(value);
}
