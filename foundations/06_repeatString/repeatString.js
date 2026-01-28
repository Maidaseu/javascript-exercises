

const repeatString = function(string, num) {

  // Reject invalid input early // 
    if (num < 0) {
        return 'ERROR';
    }

        // Start with an empty result //
        let result = '';

    // Build the repeated string // 
    for (let i = 0; i < num; i++) {
        result += string;
    } 
    return result;
};



// Do not edit below this line
module.exports = repeatString;

// NOTES //




