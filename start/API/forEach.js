/*
*   forEach()方法用于调用数组的每个元素，并将元素传递给回调函数。
*   forEach()对于空数组是不会执行回调函数的
* */

Array.prototype._forEach = function (fn,thisValue) {
    let arr = thisValue || this
    if(typeof fn !=='function'){
        throw new TypeError(fn + 'is not a function');
    }
    for (let i=0;i<arr.length;i++){
        fn.call(arr,arr[i],i,arr)
    }
}
let arr = [4,9,16,25];
arr._forEach((item,i,arr)=>{
    console.log('item:'+item+' i:'+i)
    console.log(arr)
})
