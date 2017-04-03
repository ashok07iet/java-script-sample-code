var students=["ram","mohan"];


function convert(arr){
     var arr1=[];
    for(i=0;i<arr.length;i++){
     
       var e=arr[i];
        console.log(e);
        arr1.push(e.toUpperCase());
    }
   
 return arr1;   
}

var newArr=convert(students);
console.log(newArr);