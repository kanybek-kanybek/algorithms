/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nextGreaterMap = new Map();
    let stack = [];
    
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            nextGreaterMap.set(stack.pop(), num);
        }
        stack.push(num);
    }
    
    while (stack.length > 0) {
        nextGreaterMap.set(stack.pop(), -1);
    }
    
    return nums1.map(num => nextGreaterMap.get(num));
};

function test() {
    let nums1_1 = [4, 1, 2];
    let nums2_1 = [1, 3, 4, 2];
    console.log(nextGreaterElement(nums1_1, nums2_1)); 

    let nums1_2 = [2, 4];
    let nums2_2 = [1, 2, 3, 4];
    console.log(nextGreaterElement(nums1_2, nums2_2)); 
}

test();

