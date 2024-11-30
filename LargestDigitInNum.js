//Write a JavaScript function findLargestDigit that takes a positive integer n as input and returns the largest digit in the number.
function findLargestDigit(number){
    let remainder;
    let arr=[];
    while(number>0){
        let remainder = number % 10; // Get the last digit
        arr.push(remainder); // Add the digit to the array
        number = Math.floor(number / 10); // Remove the last digit
    }
    let largest=arr[0];
    for(let j=0;j<arr.length;j++){
        if(arr[j]>largest){
            largest=arr[j];
        }
    }
    return largest;
}
let number=12345;
console.log(findLargestDigit(number));