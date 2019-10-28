let plus = document.getElementById('plus');
let value = document.getElementById('value');
let minus = document.getElementById('minus');
let count = 0;
plus.addEventListener('click', () => {
    count++;
    value.innerHTML = count;
})
minus.addEventListener('click', () => {
    count--;
    value.innerHTML = count;
})