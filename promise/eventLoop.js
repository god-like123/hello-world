/*
*事件循环机制-----eventLoop
* 宏任务和微任务是什么？
* 是谁发起的？
* 为什么微任务的执行要先与宏任务
* */


console.log('start')

setTimeout(()=>{
    console.log('setTimeout')
},0)

new Promise(resolve => {
    console.log('promise')
    resolve()
})
    .then(()=>{
        console.log('then1')
    })
    .then(()=>{
        console.log('then2')
    })

console.log('end')
