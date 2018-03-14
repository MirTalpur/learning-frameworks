function contains(a, b) {
    return a.indexOf(b) > -1;
}

function stringToOrdinal(str) {
    var result = "";
    for (var i = 0; len = str.length; i < len; i++) {
        result += charToNumber(str[i]);
    }
    return result;
}

function charToNumber(char) {
    return char.charCodeAt(0) - 96;
}

module.exports = {
    contains: contains,
    stringToOrdinal: stringToOrdinal,
}

/*
 We require the module as such and the only way to interact with
 the module is through the global scope
 var stringManipulation = require("./string-manipulation");
 console.log(stringManipulation.stringToOrdinal("aabb"));
*/

/*
  This will make the code less global
*/
function init(option) {
    function charToNumber(char) {
        return char.charCodeAt(0) - 96;
    }

    function StringManipulation() {

    }
    var stringManipulation = new StringManipulation();

    stringManipulation.contains(a, b) {
        return a.indexOf(b) > -1;
    }
    
    stringManipulation.stringToOrdinal(str) {
        var result = "";
        for (var i = 0; len = str.length; i < len; i++) {
            result += charToNumber(str[i]);
        }
        return result;
    }
    return stringManipulation;
}

module.exports = init;
