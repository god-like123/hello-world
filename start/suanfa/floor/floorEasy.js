// 需要哈希表
function floorEasy(n) {
    if (n < 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    if (map.contains(n)) {
        return map.get(n)
    } else {
        let value = floorEasy(n - 1) + floorEasy(n - 2)
        map.put(n, value);
        return value
    }
}

console.log(floorEasy(10))
