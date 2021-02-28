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