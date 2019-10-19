let quizzes = [
    {
        Question: 'Which fictional detective lived at 22b Baker Street?\n1. Watson\n2. Sam Spade\n3. Scubidu\n4. Sherlock Holmes',
        Answerkey: '1',
    },
    {
        Question: 'What sweet food made by bees using nectar from flowers?\n1. Bread\n2. Honey\n3. Sugar\n4. Potent',
        Answerkey: '1',
    },
]
let n = [];
let x = Math.floor(Math.random()*2);
for (let i = 0 ; i < 2 ; i++)
{
    n[i] = prompt(quizzes[x].Question);
    if (n[i] == quizzes[i].Answerkey)
    {
        alert('Correct!');
    }
    else 
    {
        alert('Wrong!');
    }
}