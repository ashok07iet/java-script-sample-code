var tickets=[
    {name:"A1",priority:1,open:true},
    {name:"A2",priority:5,open:false},
    {name:"A3",priority:4,open:false},
    {name:"A4",priority:1,open:true},
    {name:"A5",priority:3,open:false},
    {name:"A6",priority:1,open:true}
];

function isAllTicketClose(tickets){
    var isclosed=true;
    tickets.forEach(function(t){
        if(t.open){
           isclosed=false; 
        }
    });
    return isclosed;
    
}
function f1(e){
     return e.open; 
    
}
functio isAllOpen(tickets){
    tickets.every(f);
}
    console.log(isAllOpen(tickets));


