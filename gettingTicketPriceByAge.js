//Write a function getTicketPrice(age) that takes in a person's age and returns the ticket price for a movie, using a switch statement. 

// Function to determine the ticket price based on the person's age.
function getTicketPrice(age){

    // Using a switch statement to check the value of 'age' and return appropriate ticket price.
    switch(age){
        case (age<12):
            return 5;
            break;
        case (age>=12 && age<=17):
            return 8;
            break;
        case (age>=18 && age<=59):
            return 12;
            break;
        case (age>=60):
                return 7;
                break;
        default:
            return "Invalid Age";
    }
}
let age=8;
console.log(getTicketPrice(age));