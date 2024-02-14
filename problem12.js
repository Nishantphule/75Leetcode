// container with most water

var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let maxWaterCap = 0

    while (left < right) {
        let width = right - left;

        let heightMin = height[left] < height[right] ? height[left] : height[right]

        let waterCap = width * heightMin;

        maxWaterCap = maxWaterCap > waterCap ? maxWaterCap : waterCap

        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }

    return maxWaterCap
};