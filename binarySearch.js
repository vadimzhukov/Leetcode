let search = function(nums, target) {
    let result = -1;
    
    let l = 0;
    let r = nums.length - 1;
    curIndex = Math.floor(l + (r - l)/2)

     while (l < r) {
        if (nums[curIndex] === target) {
            result = curIndex;
            break;
        }
        if (nums[curIndex] < target) {
            l = curIndex
            curIndex = Math.floor(l + (r - l)/2) + 1
        }
        if (nums[curIndex] > target) {
            r = curIndex
            curIndex = Math.floor(l + (r - l)/2)
        }
        
    } 

    return result;
};

const nums1 = [-1,0,3,4,4,4,4,5,9,12]
const nums2 = [-3,-2,-1,0,3,5,9,12,44,55,99,100]

console.log(search(nums1, 12))
console.log(search(nums2, 99))
console.log(search(nums2, -3))