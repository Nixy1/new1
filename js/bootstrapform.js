function validate(){
    let name=document.getElementById("name")
    let name=document.getElementById("email")
    let name=document.getElementById("mobile")
    let name=document.getElementById("password")
    if(name.value==""){
        alert ("name field can't be empyt")
        name.focus()
        return false
    }
    //case in which the field is left without any data
    
    if(email.value==""){
        alert ("email field can't be empty")
        email.focus()
        return false
    }
    //case for mobile no. greater or less than than normal formst(10 letters)
    if(isNaN(mobile.value== true || mobile.value.length!=10){
        alert ("mobile field can't be empty")
        mobile.focus()
        return false
     }
    if(password.value==""){
        alert ("password field can't be empty"
        password.focus()
        return false
    }
}