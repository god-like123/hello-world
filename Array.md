```
// 对象数组中，具有某一相同属性的对象进行去重操作

const res = new Map();
const newArr = arr.filter(item => !res.has(item.sessionId) && res.set(item.sessionId, 1))
```
