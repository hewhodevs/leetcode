/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let distinctNums = [...(new Set(nums))];
    for (let i = 0; i < distinctNums.length; i++) {
        let count = 0;
        for(let j = 0; j < nums.length; j++) {
            if (distinctNums[i] === nums[j]) {
                count++;
                if (count > 1) {
                    break;
                }
            }
        }
        if (count === 1) {
            return distinctNums[i];
        }
        count = 0;
    }
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
