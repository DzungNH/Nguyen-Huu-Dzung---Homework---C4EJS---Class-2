let num = document.getElementById('num');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let value = document.getElementById('value');
start.addEventListener('click', () => {
    let numValue = num.value;
    value.innerHTML = numValue;
    let interval = setInterval(() => {
        numValue--
        value.innerHTML = numValue;
        if(numValue <= 0){
            value.innerHTML = `Time's Up`;
            clearInterval(interval);
            
        }
    }, 1000);
    stop.addEventListener('click', () => {
        clearInterval(interval);
        value.innerHTML = 'Stopped';
    })
})