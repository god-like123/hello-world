/*
*   filter()方法创建一个新的数组
*   新数组中的元素是通过检查指定数组中符合条件的所有元素
*   filter()不会对空数组进行检测
*   filter()不会改变原始数组
*
*   语法： array.filter(function(currentValue,index,arr),thisValue)
* */

Array.prototype._filter = function (fn,thisValue) {
    let arr = thisValue;
    let result = [];
    if(typeof fn !== 'function'){
        throw new TypeError(fn+'is not a function');
    }
    if(!arr.length){
        return []
    }
    for(let i=0;i<arr.length;i++){
        if(fn.call(arr,arr[i],i,arr)){
            result.push(arr[i])
        }
    }
    return result
};

let arr = [];
let result = arr._filter(item=>{
    return item>10
},[4,9,12,14])
console.log(result)
