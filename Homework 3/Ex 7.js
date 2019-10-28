let arr = [1, 4, 69, 6];
let num = Number(prompt('Enter a number'));
let x = 0;
for (let i = 0 ; i < arr.length ; i++){
    if (arr[i] == num){
        alert(num + " is FOUND in my array at index " + i);
        x++;        
    }
}

    if (x == 0){
        alert(num + " is NOT found in my array");
    } 