//  String Compression

let pointer = 0; // Pointer to point characters
let print = 0; // Pointer to print compressed characters

while (pointer < chars.length) {
    let char = chars[pointer]; //store the char we are working on
    let count = 0;

    // Count repeating chars in this set
    while (pointer < chars.length &&  //were not at the end
        chars[pointer] === char) { //there is a match
        pointer++;
        count++;
    }

    // print the character
    chars[print++] = char;

    // If count > 1, print the count digits
    // we use digits to correctly inc our print pointer for multi digit nums
    if (count > 1) {
        const countStr = count.toString();
        for (let digit of countStr) {
            chars[print++] = digit;
        }
    }
}

// Sneakily trim to our new length by setting length directly
chars.length = print;

return print;