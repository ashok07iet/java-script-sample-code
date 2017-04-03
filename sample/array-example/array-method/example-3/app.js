var tickets=[
    {name:"A1",priority:1},
    {name:"A2",priority:5},
    {name:"A3",priority:4},
    {name:"A4",priority:1},
    {name:"A5",priority:3},
    {name:"A6",priority:1}
];
var filteredArry=[];
tickets.forEach(function(t){
    if(t.priority===1){
        filteredArry.push(t);
       
    }   
});

console.log(filteredArry);

var filtterArr2=tickets.filter(function(t){
    return t.priority===4;
});
console.log(filtterArr2);