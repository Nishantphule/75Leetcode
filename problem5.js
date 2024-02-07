// reverse vowels of a string

var reverseVowels = function (s) {
    let newS = s.split("")
    let arr = [];
    let index = [];
    for (var i = 0; i < s.length; i++) {
        if (("aeiouAEIOU").includes(s[i])) {
            arr.push(s[i])
            index.push(i)
        }
    }

    for (var j = 0, k = arr.length - 1; j < index.length, k >= 0; j++, k--) {
        newS[index[j]] = arr[k]
    }
    return newS.join("")


};
