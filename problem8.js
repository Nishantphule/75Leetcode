//  increasing triplet seqeunce

var increasingTriplet = function (nums) {
    let min = Math.max(...nums);
    let mid = min;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] <= min) {
            min = nums[i]
        }
        else if (nums[i] <= mid) {
            mid = nums[i]
        }
        else {
            return true
        }
    }
    return false;
}