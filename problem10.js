//  move zeroes

var moveZeroes = function (nums) {
    for (var num of nums) {
        if (num === 0) {
            nums.splice(nums.indexOf(num), 1)
            nums.push(0)
        }
    }
};