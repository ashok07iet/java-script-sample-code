function multiply(a,b){
    a=a?a:10;
    b=b?b:2;
    return a*b;
    
}
var c=multiply(3,5);
 var d=multiply();
console.log(c);//15
console.log(d);//20
function mul(a=1,b=21){
    return a*b;
}

var c=mul(3,5);
 var d=mul(undefined,undefined);
console.log(c);//15
console.log(d);//20