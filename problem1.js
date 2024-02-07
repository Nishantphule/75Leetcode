// merge strings alternately

var mergeAlternately = function (word1, word2) {
    const word3 = word1.split("");
    const word4 = word2.split("");
    let length = word3.length > word4.length ? word3.length : word4.length;
    let newArr = "";
    for (var i = 0; i < length; i++) {
        word3[i] ?
            newArr += word3[i] : ''

        word4[i] ?
            newArr += word4[i] : ''

    };
    return newArr;
};