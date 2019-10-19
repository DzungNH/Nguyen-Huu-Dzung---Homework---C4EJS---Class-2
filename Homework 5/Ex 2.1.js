let word = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'coo', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let wordCount = {
};
let a;
for(let i = 0; i < word.length; i++){
    a = word[i].toLowerCase();
    if(wordCount[a]){
        wordCount[a]++;
    } else {
        wordCount[a] = 1;
    }
}
console.log(wordCount);