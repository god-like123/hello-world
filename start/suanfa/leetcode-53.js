// numMax = (nums) =>{
//     let count = 0;
//     nums.forEach(e=>{
//         if(e<0){
//             count++;
//         }
//         if(count === nums.length){
//             let b = nums.sort();
//             return b[0]
//
//         }
//     })
//     let ans = nums[0];
//     let sum = 0;
//     for (const num of nums){
//         if(sum>0){
//             sum+=num;
//         }else{
//             sum = num;
//         }
//         ans = Math.max(ans,sum)
//     }
//     return ans
// }
//
// const nums = [-1]
// console.log(numMax((nums)))
var maxSubArray = function(nums) {
    // let count = 0;
    // nums.forEach(e=>{
    //     if(e<0){
    //         count++;
    //     }
    //     if(count === nums.length){
    //         return Math.max(null,nums)
    //     }
    // })
    let ans = nums[0];
    let sum = 0;
    for(let num of nums){
        if(sum>0){
            sum += num
        }else{
            sum = num
        }
        ans = Math.max(ans,sum)
    }
    return ans
};
const nums = [-1,-2,-5,-3,-1,-2,-4]
console.log(maxSubArray(nums))
