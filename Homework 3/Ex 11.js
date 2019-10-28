let string = prompt('Enter a sequence number');
let a = string.split(",");

let b = a.filter(x => Number(x)%2==1);
alert(a + "=>" + b);