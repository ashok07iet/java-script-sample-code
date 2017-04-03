var fruits=[{
    name:"apple",
    price:10,
    color:"red"
},
            {
    name:"apple1",
    price:101,
    color:"red1"
},
]
console.log(JSON.stringify(fruits));
function processForCoast(fruits){
    fruits.forEach(function(fruit){
        if(fruit.price>10){
            fruit.isCheap=true;
        }else{
            fruit.isCheap=false;
        }
    });
}
processForCoast(fruits);
console.log(JSON.stringify(fruits));

