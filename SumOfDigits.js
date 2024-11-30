//Write a JavaScript function sumOfDigits that takes a positive integer n as input and returns the sum of all its digits
function sumOfDigits(number){
    let sum=0;
    while(number>0)
    {
        let remainder = number % 10; // Get the last digit
        sum+=remainder;
        number = Math.floor(number / 10); // Remove the last digits
    }
    return sum;
}

let number=1234;
console.log(sumOfDigits(number));