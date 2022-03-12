function getFloorWays(n) {
    if (n < 1) {
        return 0
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    return getFloorWays(n - 1) + getFloorWays(n - 2)
}

console.log(getFloorWays(10))
