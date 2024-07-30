const repeatString = function(string, num) {
    
    let returnedString = "";
    for (i = 0; i < num; i++){
        returnedString = returnedString + string;
    }

    return returnedString;
};
repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
