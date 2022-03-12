/**
 数组扁平化
 */
const arr = [1, [2, [3, [4, 5]]], 6];

const res1 = arr.flat(Infinity);

const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
// ** 但是该方法会使数据类型都变成字符串

const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');

const flatten = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
}
const res4 = flatten(arr)

const res5 = [];
const fn = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            fn(arr[i])
        } else {
            res5.push(arr[i])
        }
    }
}
fn(arr)


/**
 数组去重
 */

const arr1 = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

const unique1 = Array.from(new Set(arr));

const unique2 = arr => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                len--;
                j--;
            }
        }
    }
    return arr;
};

const unique3 = arr => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i] === -1)) {
            res.push(arr[i])
        }
    }
    return res;
};

const unique4 = arr => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
};

const unique5 = arr => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
};

const unique6 = arr => {
    const map = new Map();
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true);
            res.push(arr[i]);
        }
    }
    return res;
};

/**
 * 类数组转化为数组
 *
 * 类数组是具有length属性，但不具有数组原型上的方法。常见的类数组有 arguments 、DOM操作
 * 方法返回的结果
 */

Array.from(document.querySelectorAll('div'))

Array.prototype.slice.call(document.querySelectorAll('div'))

// [...document.querySelectorAll('div')]

Array.prototype.concat.apply([], document.querySelectorAll('div'));


/**
 * Array.prototype.filter()
 */
Array.prototype.filter = function (callback, thisArg) {
    if (this === undefined) {
        throw new TypeError('this is null or not undefined')
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    const res = [];
    // 让 O 成为回调函数的对象传递（强制转换对象）
    const O = Object(this);
    // >>>0 保证len为number, 且为正整数
    const len = O.length >>> 0;
    for (let i = 0; i < len; i++) {
        if (i in O) {
            if (callback.call(thisArg, O[i], i, O)) {
                res.push(O[i])
            }
        }
    }
    return res;
};

/**
 * Array.prototype.map()
 */
Array.prototype.map = (callback, thisArg) => {
    if (this === undefined) {
        throw new TypeError('this is null or not defined')
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + 'is not a function');
    }
    const res = [];
    const O = Object(this);
    const len = O.length >>> 0;
    for (let i = 0; i < len; i++) {
        if (i in O) {
            res[i] = callback.call(thisArg, O[i], i, this);
        }
    }
    return res;
}

/**
 * Function.prototype.apply
 * 第一个参数是绑定的this，默认为window，第二个参数是数组或类数组
 * Function.prototype.call  与之不同之处在于接收参数，接收的是一个参数列表
 * Function.prototype.call = function（context = window, ...args）
 */
Function.prototype.apply = function (context = window, args) {
    if (typeof this !== "function") {
        throw new TypeError('type error')
    }
    const fn = Symbol('fn');
    context[fn] = this;

    const res = context[fn](...args);
    delete context[fn];
    return res;
}

/**
 * Function.prototype.bind
 *
 */
Function.prototype.bind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Type Error');
    }

    var self = this;

    return function F() {
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(context, [...args, ...arguments])
    }
}

/**
 * debounce 防抖
 * 触发高频时间后n秒内函数只会执行一次，如果n秒内高频时间再次触发，则重新计算时间。
 * 防抖常应用于用户进行搜索输入节约请求资源，window触发 resize事件时进行防抖只触发一次
 */

const debounce = (fn, time) => {
    let timeout = null;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, time);
    }
}

/**
 * throttle 节流
 * 高频时间触发，但n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 节流常应用于鼠标不断点击触发、监听滚动事件。
 */

const throttle = (fn, time) => {
    let flag = true;
    return function () {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time)
    }
}

/**
 * 函数柯里化
 * 指的是将一个接受多个参数的函数变为接受一个参数返回一个函数的固定形式，
 * 这样便于再次调用，例如f(1)(2)
 */
function add() {
    const _args = [...arguments];

    function fn() {
        _args.push(...arguments);
        return fn;
    }

    fn.toString = function () {
        return _args.reduce((sum, cur) => sum + cur);
    };
    return fn;
}

/**
 * instanceof
 * instanceof 运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上。
 */
const myInstanceof = (left, right) => {
    // 基本数据类型都返回false
    if (typeof left !== 'object' || left === null) return false;
    let proto = Object.getPrototypeOf(left);
    while (true) {
        if (proto === null) return false;
        if (proto === right.prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
}

/**
 * Object.is
 * 主要是解决这两个问题
 * +0 === -0  //true
 * NaN === NaN  //false
 */

const is = (x, y) => {
    if (x === y) {
        // +0和-0应该不相等
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

/**
 * Object.assign
 * Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
 * ### 注意：该操作是浅拷贝
 */


/**
 * 深拷贝
 * 1.JSON.stringify 和 JSON.parse
 * 用JSON.stringify把对象转换成字符串，再用JSON.parse把字符串转换成新的对象。
 * 条件：可以转成JSON格式的对象才能使用这种方法，如果对象中包含function或RegExp这些就不能使用这种方法了
 *
 * 2.使用递归的方式实现深拷贝
 */

// 1.JSON.stringify 和 JSON.parse
deepCopy = (obj) => {
    let _obj = JSON.stringify(obj);
    return JSON.parse(_obj);
};

// 2.使用递归的方式实现深拷贝
const cloneDeep1 = (target, hash = new WeakMap()) => {
    if (typeof target !== 'object' || target === null) {
        return target;
    }
    // 哈希表中存在直接返回
    if (hash.has(target)) return hash.get(target);
    const cloneTarget = Array.isArray(target) ? [] : {};
    hash.set(target, cloneTarget);

    // 针对Symbol属性
    const symKeys = Object.getOwnPropertySymbols(target);
    if (symKeys.length) {
        symKeys.forEach(symKey => {
            if (typeof target[symKey] === 'object' && target[symKey] !== null) {
                cloneTarget[symKey] = cloneDeep1(target[symKey]);
            } else {
                cloneTarget[symKey] = target[symKey]
            }
        })
    }

    for (const i in target) {
        if (Object.prototype.hasOwnProperty.call(target, i)) {
            cloneTarget[i] =
                typeof target[i] === 'object' && target[i] !== null
                    ? cloneDeep1(target[i], hash) : target[i];
        }
    }
    return cloneTarget;
};

/**
 * JSONP
 * script标签不遵循同源协议，可以用来进行跨域请求，优点就是兼容性好但仅限于GET请求
 */

const jsonp = ({url, params, callbackName}) => {
    const generateUrl = () => {
        let dataSrc = '';
        for (let key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                dataSrc += `${key}=${params[key]}&`;
            }
        }
        dataSrc += `callback=${callbackName}`;
        return `${url}?${dataSrc}`;
    };
    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script');
        scriptEle.src = generateUrl();
        document.body.appendChild(scriptEle);
        window[callbackName] = data => {
            resolve(data);
            document.removeChild(scriptEle);
        }
    })
};


/**
 * AJAX
 */
const getJSON = function (url) {
    return new Promise((resolve, reject) => {
        const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp');
        xhr.open('GET', url, false);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200 || xhr.status === 304) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.responseText));
            }
        }
        xhr.send();
    })
};

/**
 * event模块
 * 实现node中回调函数的机制，node中回调函数其实是内部使用了观察者模式。
 * 观察者模式：定义了对象间一种 一对多 的依赖关系，当目标对象Subject发生改变时，所有依赖
 * 它的对象Observer都会得到通知。
 */


