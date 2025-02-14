/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsElements = new Map();

    for (let i = 0 ;; ++i) {    
        const firstAddend = nums[i];
        const secondAddend = target - firstAddend;
        
        if ( numsElements.has(secondAddend)) 
            return [numsElements.get(secondAddend), i];
        
        numsElements.set(firstAddend, i);
    }
};

twoSum([0, 2, 3], 5);
