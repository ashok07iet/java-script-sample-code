/* 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Employee(){
    this.firstName="ram";
    this.lastName="parasad";
    this.age=20; 
    this.fullName=function(){
        return this.firstName+this.lastName;
    };
}
var employee=new Employee();
document.write("fullName::"+employee.fullName());
document.write("<br/>");
var emp={
    firstName:"mohan",
    lastName:"kumar",
    displayName:employee.fullName
};
document.write("fullName::"+emp.displayName());
document.write("<br>");

function printName(fn){
   document.write(fn()); 
}
printName(employee.fullName);


