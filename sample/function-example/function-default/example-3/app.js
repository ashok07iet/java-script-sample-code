function submit(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var age=document.getElementById("age");
    var phone=document.getElementById("phone");
    var sex=document.getElementById("sex");
    var valid=validate(name,email,age,phone,sex);
    if(valid){
        alert("valid");
        
    }else{
        alert('invalid input');
    }
}
function validate(name,email,age,phone,sex){
    return validateName(name)&&validateEmail(email)&&validatePhone(phone)&&validatedAge(age)&&validateSex(sex);
}
function validateName(name){
    if(name&&name.length>5 && name.length<10){
        return true;
    }else{
        return false;
    }
}

function validateEmail(email){
    if(email&&email.indexOf('@')>0&&indexOf('.com')>2){
        return true;
    }else{
       return false; 
    }
}
function validatedAge(age){
    if(age&&isNaN(age)&&age<15){
        return true;
    }else{
        return false;
    }
}
 function validatePhone(phone){
     if(phone&&isNaN(phone)&&phone.length==10){
         return true;
     }
 }
function validateSex(sex){
    if(sex&&(sex=='M'||sex=='F')){
       return true;
       }else{
       return false;
       }
}