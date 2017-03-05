
var n=1;

do{
    document.write(n);
    n++;
   var conf= confirm("you want to continue");
    if(!conf){
        break;
    }
    document.write("next");
}while(conf);
