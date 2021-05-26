/*
*   every()方法用于检测数组所有元素是否都符合指定条件(通过函数提供)
*   every()方法使用指定函数检测数组中的所有元素
*   如果数组中检测到有一个元素不满足，则整个表达式返回false，且剩余元素不会检查
*   如果所有元素都满足条件,返回true。
*   every()对空数组检测,返回true
*   every()不会改变原始数组
* */

Array.prototype._every = function(fn,thisValue){
    let arr = thisValue || this;
    if(typeof fn!=='function'){
        throw new TypeError(fn+'is not a function')
    }
    if(!arr.length){
        return true
    }
    for(let i =0;i<arr.length;i++){
        if(!fn.call(this,arr[i],i,arr)){
            return false
        }
    }
    return true
}

function checkAdult(item){
    return item >= 11
}
let arr =[32,33,30,21]
let result = arr._every(checkAdult)
console.log(result)
