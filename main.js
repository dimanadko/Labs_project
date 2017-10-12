'use strict';

let clothes = [
  'jeans','t-shirt','blue jacket','trousers', 'pans',
  'shirt', 'red hoody', 'sweatshirt', 'black snapback', 'socks'
];
console.log(clothes);
console.log('----------')

function DoubleWord(word) {
  if ((word.split(' ')).length === 2) {
    return word;
  }
};

let complicated_clothes = clothes.filter(DoubleWord);

console.log(complicated_clothes);
console.log('----------')

let sorted_clothes = clothes.sort();

console.log(sorted_clothes);
console.log('----------')

function InfWord (word){
  const frequancy = {};
  let char_arr = word.split('');
  let i;
  for (i of char_arr) {
    (frequancy[i])? frequancy[i] +=1 : frequancy[i] = 1;
  };
  let loud = word.split(/[^eyuioa]/g)
  let diftounge = [];
  for (i of loud){
    if (i.length === 2){diftounge.push(i)};
  };
  return[frequancy, diftounge];
};
let inform_arr = clothes.map(InfWord);
console.log(inform_arr);
