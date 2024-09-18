/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let distinctNums = new Set(nums);
    
    let sortedNums = [...distinctNums].sort((a, b) => b - a);
    
    if (sortedNums.length >= 3) {
        return sortedNums[2];
    }
    
    return sortedNums[0];
};
