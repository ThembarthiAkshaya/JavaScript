function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // If divisible by 100, it must also be divisible by 400 to be a leap year
            if (year % 400 === 0) {
                console.log("Leap year");
            } else {
                console.log("Non-leap year");
            }
        } else {
            // If divisible by 4 but not by 100, it's a leap year
            console.log("Leap year");
        }
    } else {
        console.log("Non-leap year");
    }
}

let year = 2002;
isLeapYear(year);  // Output: Non-leap year
