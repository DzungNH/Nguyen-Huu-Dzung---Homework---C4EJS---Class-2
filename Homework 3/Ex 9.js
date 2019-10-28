setshape("rocket-large")
let x = 50
const colors = [`red`, `gray`, `blue`, `purple`, `cyan`]
for(let j = 0 ; j < 5 ; j++){
color(colors[j])
for(let i = 0 ; i < 4 ; i++){ 
  fd(x)
  rt(90)
}
x += 20
}