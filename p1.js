// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // check if array contains a 0 and the target value already, if so return their indicies
    if(nums.includes(target) && nums.includes(0)) {
        return [nums.indexOf(0), nums.lastIndexOf(target)];
    }
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let difference = target - num;
        let index = nums.lastIndexOf(difference);
        if (index !== -1 && index !== i) {
            return [i, index];
        }
    }
};

console.log(twoSum([1,2,0,10,6,9], 10)); // should resutn [2,3]
console.log(twoSum([2,7,11,15], 9)); // should return [0,1];
console.log(twoSum([3,2,4], 6)); // should return [1,2];
console.log(twoSum([3,3], 6)); // should return [0,1];
console.log(twoSum([0,4,3,0], 0)); // should return [0,3];
console.log(twoSum([-1, -2, -3, -4, -5], -8)); // should return [2,4];
console.log(twoSum([1,2,-10, 5, 9], -5)); // should return [2,3];
console.log(twoSum([-18,12,3,0], -6)); // should return [0,1];