//  product of array except self

var productExceptSelf = function (nums) {
    let arrLeft = [];
    let multiLeft = 1;
    for (var i = 0; i < nums.length; i++) {
        arrLeft[i] = multiLeft;
        multiLeft *= nums[i];
    }

    let arrRight = [];
    let multiRight = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        arrRight[i] = multiRight;
        multiRight *= nums[i];
        arrRight[i] *= arrLeft[i]
    }
    return arrRight;
};