let string = prompt('Enter a sequence of names');
let a = string.split(",");
alert(string + "=>" + a.map( a => "<"+a+">"));