function singularAutoPlural(singular, plural = concat(singular ,'s'), 
                            rallyingCry = plural + ' ATTACK!!!') {
  return [singular, plural, rallyingCry]; 
}
function concat(a,b){
    return a+b;
}
var c=singularAutoPlural('Gecko');
console.log(c);

