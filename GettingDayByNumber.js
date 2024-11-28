//writing program on JavaScript function getDayName(dayNumber) that takes a number from 1 to 7 and returns the corresponding name of the day of the week

function getDay(DayNumber){
    switch(DayNumber){
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;
        default:
            return "invalide input"
    }
}
let DayNumber=5;
console.log(getDay(DayNumber));