let string = prompt('Enter a squence of Number, separeted by commas(,)');
let x = string.split(",");
let total = 0;
for(let i = 0 ; i < x.length ; i++){
    total += Number(x[i]);
}
alert('The sum of itemis ' + total);
