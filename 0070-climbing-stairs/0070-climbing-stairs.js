/**
 * @param {number} n
 * @return {number}
 */
    var climbStairs = function(n) {
        if (n <= 2) {
            return n;
        }
        
        let lift = new Array(n + 1);
        lift[1] = 1;
        lift[2] = 2;
        
        for (let i = 3; i <= n; i++) {
            lift[i] = lift[i-1] + lift[i-2];
        }
        
        return lift[n];
    };
;