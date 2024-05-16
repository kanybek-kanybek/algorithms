/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0; 
    let left = 1, right = Math.floor(x / 2) + 1; 
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2); 
        if (mid * mid > x) {
            right = mid - 1; 
        } else {
            left = mid; 
        }
    }
    return left; 
};