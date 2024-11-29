//writing program on finding sum of even numbers in an array of integers
function findSumOfEvenNumbers(arr)
{
    //initializing a variable
    let sum=0;

    //creating loop to iterate through the array
    for(let i=0;i<arr.length;i++){
        
        //if it is divisible by 2 then it will be added
        if(arr[i]%2==0)
            sum+=arr[i];
    }

    //returning the value
    return sum;
}

//intializing an array of number
let numbers=[1,2,3,4,5,6,7,8];

//calling the function and as well as displaying the result
console.log(findSumOfEvenNumbers(numbers));