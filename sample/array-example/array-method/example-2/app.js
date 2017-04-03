var numbers=[2,5,6,7];
var sqNumber=numbers.map(function(o){
    
    return o*o;
});
console.log(sqNumber);

var students=["ram","mohan"];
var uStudents=students.map(function(student){
    
    return student.toUpperCase();
});
console.log(uStudents);