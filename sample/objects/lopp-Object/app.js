function Employee(){
    this.name="ashok";
    this.age=20;
    this.salary=200000;
}

Employee.prototype.bonous=10;
var employee=new Employee();

for(var item in employee){
    if(employee.hasOwnProperty(item)){
    console.log(item);
    document.write("<br/><br/>"+employee[item]);
}
}
var keys=Object.keys(employee)

keys.forEach(function(val){
    
    document.write("<br/><br/>"+employee[val]);
});

