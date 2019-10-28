let string = prompt('Enter a squence of Number, separeted by commas(,)');
let x = string.split(",");
let min = Number(x[0]);

for(let i = 0 ; i < x.length ; i++){
    if (min > Number(x[i])){
        min = Number(x[i]);
    }
}
alert('The smalles number is ' + min);