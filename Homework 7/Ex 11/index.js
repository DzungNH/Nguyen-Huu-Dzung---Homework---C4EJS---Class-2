let button = document.getElementById('button');
let name = document.getElementById('name');
let result = document.getElementById('result');
console.log(button);
console.log(name);
console.log(result);
button.addEventListener('click', () => {
    console.log('Upper it!!!! just cliked');
    console.log(`User's name: ${name.value}`);
    console.log(`User's name uppercase: ${name.value.toUpperCase()}`);
    result.textContent = name.value.toUpperCase();
})