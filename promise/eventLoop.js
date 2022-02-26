/*
*事件循环机制-----eventLoop
* 宏任务和微任务是什么？
* 是谁发起的？
* 为什么微任务的执行要先与宏任务
* */


// console.log('start')
//
// setTimeout(()=>{
//     console.log('setTimeout')
// },0)
//
// new Promise(resolve => {
//     console.log('promise')
//     resolve()
// })
//     .then(()=>{
//         console.log('then1')
//     })
//     .then(()=>{
//         console.log('then2')
//     })
//
// console.log('end')

//start promise end then1 then2 setTimeout

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');

/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * promise2      **************  async1 end
 * async1 end    **************  promise2
 * setTimeout
 */
