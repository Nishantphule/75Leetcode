// is subsequence

var isSubsequence = function (s, t) {
    let newS = s.split("")
    let newT = t.split("")
    let flag = 0

    for (var i = 0; i < newS.length; i++) {
        for (var j = 0; j < newT.length; j++) {
            if (newS[i] === newT[j]) {
                newT.splice(0, j + 1);
                flag++
                break;
            }
        }
    }

    if (newS.length === flag) {
        return true
    }
    else {
        return false
    }
};