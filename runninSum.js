var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums;
};

const nums = [1,2,3,4];
console.log(runningSum(nums))