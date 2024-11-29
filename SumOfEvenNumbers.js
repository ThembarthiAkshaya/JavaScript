//JavaScript function sumEvenNumbers that accepts an integer n and returns the sum of all even numbers from 1 to n (inclusive).
function sumEvenNumbers(number){

    //intilizing sum as zero intially
    let sum=0;

    //loop to iterate through the number from 1 to n
    for(let i=1;i<=number;i++){
        // Check if the number is even
        if(i%2==0){
            sum+=i;
        }
    }
     //returning the value
    return sum;
}
//initializing a number
let number=10;

//calling the function by passing the number and as well as displaying the result
console.log(sumEvenNumbers(number));