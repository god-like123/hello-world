/* Promise.all(iterable) 方法返回一个Promise实例，此实例在iterable参数内
 * 所有的promise都完成或参数中不包含promise时回调完成（resolve）;如果参数中
 * promise有一个失败，则此实例回调失败(reject)，失败的原因是第一个失败promise的结果
 *
 * 它通常在启动多个异步任务并发运行并为其结果创建承诺之后使用，以便可以等待
 * 所有任务完成
 */

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(alert(123))
        }
        let count = 0;
        let newValue = new Array(promises.length);
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then(res => {
                    newValue[i] = res;
                    count++;
                    if (count === promises.length) {
                        return resolve(newValue)
                    }
                }, rej => reject(rej))
        }
    })
}
