function a() {
	console.log(this); // prints [object Window]
}
a();

function a() {
    function b() {
       function c() {
          console.log(this); // prints [object Window]
       }
       c();
    }
    b();
}
a();

var user = {'name' : 'Bon Jovi'};
user.sing = function() {
	console.log(this.name + ' is singing');
}
user.sing(); // prints Bon Jovi is singing

function Singer() {
	this.sing = function() {
		console.log(this + ' is singing');
        return this;
    };
    return this;
}
var user = new Singer();
console.log(user.sing() === user); // prints true

var usr=Singer();
console.log(usr.sing() === window); // prints true


var randomWeights = [10,20,30];

function addToBox() {
	var weight = 0;
	for (var i = 0; i < arguments.length; i++) {
		weight += arguments[i];
	}
	this.weight = weight;
}

var redBox = {};
var blueBox = {};

addToBox.apply(redBox, randomWeights);
addToBox.call(blueBox, 1,2,3,4,5);
console.log(redBox.weight); // prints '60'
console.log(blueBox.weight);// prints '15'