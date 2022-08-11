```
// 对象数组中，具有某一相同属性的对象进行去重操作

const res = new Map();
const newArr = arr.filter(item => !res.has(item.sessionId) && res.set(item.sessionId, 1))
```

```
<!-- 特殊情况下,键盘控制滚动条  -->
 const handleKeyDown = (e: any) => {
    const scrollY = document.querySelector('.queue-list') as Element;
    if (e.keyCode === 33 || e.keyCode === 38) {
      scrollY.scrollBy(0, -100);
    }
    if (e.keyCode === 34 || e.keyCode === 40) {
      scrollY.scrollBy(0, 100);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
```
