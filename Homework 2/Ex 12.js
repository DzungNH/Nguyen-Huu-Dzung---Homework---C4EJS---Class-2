clear();
setshape('rocket');
let n = prompt('Enter number of edges');
for(let i = 0 ; i < n ; i++){
  fd(100);
  rt(360 / n);
}