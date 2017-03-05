var number=Number(prompt('please eneter a number to generate Fibonacci Series',""));
var  n1=0,n2=1,n3
document.write(n1+"&nbsp;&nbsp;"+n2+"&nbsp;&nbsp;");
while(number>0){
    n3=n1+n2;
   document.write(n3+"&nbsp;&nbsp;");
    n1=n2;
    n2=n3;
    number--;
}


