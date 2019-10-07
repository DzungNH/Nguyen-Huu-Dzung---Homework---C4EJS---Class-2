let n = Number(prompt('n ='));
let x = prompt('x =');
if(x < n / 2){
    alert('Lower half of '+ n);
}else if(x == n / 2){
    alert('Equal Half of ' + n);
}else{
    alert('Higher half of ' + n);
}