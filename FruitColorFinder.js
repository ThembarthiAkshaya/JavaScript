function getFruitColor(fruit){
    switch(fruit){
        case "apple":
            console.log("red");
            break;
        case "banana":
            console.log("yellow");
            break;
        case "grape":
            console.log("green");
            break;
        case "orange":
            console.log("orange");
            break;
        case "kiwi":
            console.log("green");
            break;
        default:
            console.log("unknown");
    }
}

let fruit="mango";
getFruitColor(fruit);