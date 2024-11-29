//takes a string as input and returns the string in reverse order. 
function reverseString(str1) {
    let str2="";
    let ch;
    for(let i=0;i<str1.length;i++){
        ch=str1[i];
        str2=ch+str2;
    }
    return str2;
}
let str1="Geeks";
console.log(reverseString(str1));