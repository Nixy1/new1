//if statement

let i=30;let j=50;let k=900
if(i>=j && i>=k)
{
console.log("i is largest number")
}
else if(j>=i && j>=k)
{
    console.log("j is largest number")

}
else{
    console.log("k is largest number")
}
//switch statement
let choice="+"
switch(choice){
    case "+":{
        console.log(i+j)
        break
    }
    case "-":{
        console.log(i-j)
        break
    }
    default:
        console.log("invalid operation.....")
}