function Question(name , wish){
    name = prompt('What is your name?');
    wish = prompt('What you wish to do this year?');
    
    if(wish){
        alert('Hello my name is ${name} /n ${wish}');
    } else {
        alert('Hello my name is ${name} /n I have no wish');
    }
}
Question(name, wish);