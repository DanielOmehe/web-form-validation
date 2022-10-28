let pattern = /abc/;

console.log(pattern.test('abcaus'));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

dateTime = /[\d.]/

console.log(dateTime.test('27-10-2022 04:16'));

// dateTime = /[a-zA-Z]/;

// console.log(dateTime.test('27-Oct-2022'));

// let notBinary = /[^01]/;

// console.log(notBinary.test('110011'))
// console.log(notBinary.test('110222'))

// pattern = /ou?r/;

// console.log(pattern.test('color'));
// console.log(pattern.test('colour'));
// console.log(pattern.test('flavour'));
// console.log(pattern.test('flavor'));

// pattern = /boo+(hoo+)+/;

// console.log(pattern.test('boohooboohooboohoo'));

// pattern = /\d+/

// let match = pattern.exec('one two 100');

// console.log(match);

// console.log(pattern.exec('one two 100'));

pattern = /'([^']*)'/;
console.log(pattern.exec("she said 'hello'"));

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said hello"));

console.log(/bad(ly)?/.exec("bad"));
console.log(/bad(ly)/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));

function getDate(string){
      let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
      console.log(month, day, year);
      return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));

console.log(new Date());

pattern = /\b([01]+b|[\da-f]+h|\d+)\b/;

console.log(pattern.test('#1010b'));