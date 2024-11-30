/*Write a JavaScript function countDown that takes a positive integer n as input and
logs a countdown from n to 1. After the countdown reaches 1, log the message "Liftoff!"*/

// Function to countdown from the given number to 1, then log "Liftoff!"
function countDown(number)
{
    while(number>0)
    {
       console.log(number);
       number--;  // Decrement 'number' by 1 on each iteration 
    }

     // Once the loop completes (i.e., 'number' is 0 or less), log "Liftoff!"
    return "LiftOff"
}

//initializing a variable
let number=7;

//calling the function and as well as displaying the result
console.log(countDown(number));