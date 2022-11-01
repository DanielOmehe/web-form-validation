function isPattern(input){
      return /^\d{3}-\d{3}-\d{4}$/.test(input)
}

console.log(isPattern('803-386-9078'));

let refString = 'Hello world! hello there';

let pattern = /Hello/gi;

console.log(pattern.test(refString));

console.log(refString.match(pattern));

const regconst = new RegExp(`${pattern}`, 'gi');

refString = 'xyz XYZ';

console.log(refString.match(regconst));

const regexPattern1 = /\bward/gi;

const text1 = 'backward Wardrobe Ward';

console.log(text1.match(regexPattern1)); // Output: ['Ward', 'Ward']

// Syntax 2: /...\b/

// Search for a word that ends with the pattern ward
const regexPattern2 = /ward\b/gi;

const text2 = 'backward Wardrobe Ward';

console.log(text2.match(regexPattern2)); // Output: ['ward', 'Ward']

// Syntax 3: /\b....\b/

// Search for a stand-alone word that begins and end with the pattern ward
const regexPattern3 = /\bward\b/gi;

const text3 = 'backward Wardrobe Ward';

console.log(text3.match(regexPattern3));

const regexPattern = /ambi[eba]nce/;

console.log(regexPattern.test('ambiance')); // Output: true

console.log(regexPattern.test('ambience'));
console.log(regexPattern.test('ambibnce'));

function validEmail(email){
      let pattern = /^[(\w\d\W)+]+@[yahoo|gmail]+\.[\w]+$/;

      return pattern.test(email)
}

console.log(validEmail('omehedaniel232@gmail.com'));
console.log(validEmail('omehedaniel232@yahoo.com'));
console.log(validEmail('omehedaniel232$yahoo.com'));
console.log(validEmail('omehedaniel232$yahoo,com'));
console.log(validEmail('omehedaniel232@whatever.com'));

const validURL = url => {
      let pattern = /^[https?]+:\/\/((w{3}.)?[\w+]+)\.[\w+]+$/
      return pattern.test(url)
}

console.log(validURL('www.fzmovies.net'));
console.log(validURL('http://www.fzmovies.net'));