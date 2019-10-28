let size_sheeps = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Phuong Nam and here is my sheep size:");
console.log(...size_sheeps);
console.log(" ");

console.log("Now,my biggest sheep has size "+Math.max(...size_sheeps)+", let's shave it:");
console.log(" ");

let x=size_sheeps.indexOf(300);
console.log("After shearing, here is my flock");
size_sheeps.splice(x,1, 8);
console.log(...size_sheeps);
console.log(" ");



console.log("MONTH 1");
console.log("One month has, passed, my sheeps have grown, here are their sizes");
let arr_month1=size_sheeps.map(x=>x+50);
console.log(...arr_month1);
console.log(" ");
console.log("Now,my biggest sheep has size "+Math.max(...arr_month1)+", let's shave it:");
console.log(" ");
let y=arr_month1.indexOf(Math.max(...arr_month1));
console.log("After shearing, here is my flock");
arr_month1.splice(y,1, 8);
console.log(...arr_month1);
console.log(" ");

console.log("MONTH 2");
console.log("One month has, passed, my sheeps have grown, here are their sizes");
let arr_month2=arr_month1.map(x=>x+50);
console.log(...arr_month2);
console.log(" ");
console.log("Now,my biggest sheep has size "+Math.max(...arr_month2)+", let's shave it:");
console.log(" ");
let z=arr_month2.indexOf(Math.max(...arr_month2));
console.log("After shearing, here is my flock");
arr_month2.splice(z,1, 8);
console.log(...arr_month2);
console.log(" ");

console.log("MONTH 3");
console.log("One month has, passed, my sheeps have grown, here are their sizes");
let arr_month3=arr_month2.map(x=>x+50);
console.log(...arr_month3);
console.log(" ");

let total =0;
for(let a=0; a< arr_month3.length; a++){
    total+=arr_month3[a];
}
console.log("My would get size in total:"+total);
console.log("I would get "+total+"*2$ = "+total*2);