function checkage(age){
    if(age<13)
       console.log("You are a child");
    else if(age>=13 && age<=19)
       console.log("You are a teenager");
   else if(age>=20 && age<=64)
       console.log("You are an adult.");
   else
    console.log("you are a senior")
   }
   let age=30;
   checkage(age);