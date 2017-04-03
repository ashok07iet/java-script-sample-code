
var apple={
    name:"apple",
    color:"red",
    price:10,
    total:function(){
    
}
}
var mango={
    name:"mango",
    color:"yellow",
    price:10,
    total:function(){
    
}
}

function Fruit(name,color,price){
    this.name=name;
    this.color=color;
    this.price=price;
    var total=10;
    this.getTotal=function(){
        return total;
    }
    
}
var apple3=new Fruit("apple","red",10);
var mango3=new Fruit("mango","yellow",10);
console.log(apple3.name);
console.log(apple3.getTotal());

console.log(apple3);
console.log(mango3);