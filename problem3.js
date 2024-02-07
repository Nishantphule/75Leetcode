// kids with the highest no. of candies

var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies)
    return candies.map(kid => kid + extraCandies >= max)
};