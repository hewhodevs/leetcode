/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // the intersection is the elements contained in nums1
    // that are also contained in nums2
    let largeArr;
    let smallArr;
    let intersection = [];
    if (nums1.length > nums2.length) {
        largeArr = nums1;
        smallArr = nums2
    } else {
        largeArr = nums2;
        smallArr = nums1;
    }
    for (let i = 0; i < smallArr.length; i++) {
        const element = smallArr[i];
        if (largeArr.includes(element)) {
            intersection.push(element);
            largeArr.splice((largeArr.indexOf(element)),1);
        }
    }
    return intersection.sort();
};

console.log(intersect([],[])); // should return []
console.log(intersect([1,2,3],[4,5,6])); // should return []
console.log(intersect([1,2,2,1],[2,2])); // should return [2,2]
console.log(intersect([4,9,5],[9,4,9,8,4])); // should return [4,9]