/*
*   map()方法返回一个新数组,数组中的元素为原始数组元素调用函数处理后的值
*   map()方法按照原始数组顺序依次处理元素
*   map()不会对空数组进行检测
*   map()不会改变原始数组
* */


Array.prototype._map = function(fn,thisValue){
    let arr = thisValue || this
    let result = []
    if(typeof fn !== 'function'){
        throw new TypeError(fn + 'is not a function');
    }
    if(!arr.length){
        return []
    }
    for(let i=0;i<arr.length;i++){
        let r = fn.call(arr,arr[i],...arguments)
        result.push(r)
    }
    return result
};

let arr = [4,9,16,25]
let result = arr._map(item=>{
    return item*2;
})

console.log(result)
