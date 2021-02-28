function greetings(msg){
    console.log(msg)
    console.log("Function called.....")
    console.log(`hello all ${msg}`)

}


greetings("Good night")
greetings("Good evening")
greetings("Good morning")


function calculate (num1,num2,opr){
    let result;
    if(opr=="+"){
        result=num1+num2
    }else if(opr=="-"){
        result=num1-num2
    }
    return result
}
let data=calculate(10,9,"+")
console.log(data)
console.log(calculate(10,9,"-"))