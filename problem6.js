// reverse words of string

var reverseWords = function (s) {
    return s.replace(/\s+/g, " ").split(" ").reverse().join(" ").trim()
};