var findMaxAverage = function (nums, k) {
    let b = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0;
        let a = nums.slice(i, i + k);
        a.forEach(function (item) {
            sum += item;
        })
        b.push(sum)
    }
    return Math.max.apply(null, b) / k
};

const arr = [1, 12, -15, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(arr, k))

// 滑动窗口
var _findMaxAverage = function (nums, k) {
    let sum = 0;
    const n = nums.length;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    for (let i = k; i < n; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};

const arr1 = [1, 12, -15, -6, 50, 3]
const t = 5;
console.log(_findMaxAverage(arr1, t))
