module.exports = {}

module.exports.capitalize = function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}

module.exports.reverseString = function reverseString(str) {
    return str.split("").reverse().join("");
}

module.exports.calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

// Caeser cipher with a shift of 5
module.exports.caeserCipher = function caeserCipher(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";

    for (let char of str) {
        if (alphabet.includes(char)) {
            let index = alphabet.indexOf(char) + 5;
            if (index > 25) index = index - 26;
            output += alphabet[index];
        }
        else if (upperAlphabet.includes(char)) {
            let index = upperAlphabet.indexOf(char) + 5;
            if (index > 25) index = index - 26;
            output += upperAlphabet[index];
        }
        else output += char;
    }
    return output;
}

module.exports.analyzeArray = function analyzeArray(arr) {
    let properties = {
        average: arr.reduce((prev, next) => prev += next, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
    return properties;
}