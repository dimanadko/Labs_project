'use strict';

let clothes = [
  'jeans','t-shirt','blue jacket','trousers', 'pans',
  'shirt', 'red hoody', 'sweatshirt', 'black snapback', 'socks'
];
console.log({clothes});

function DoubleWord(word) {
  if ((word.split(' ')).length === 2) {
    console.log(word);
    return word;
  }
};
let complicated_clothes = clothes.map(DoubleWord);
let sorted_clothes = clothes.sort();
console.log(sorted_clothes);

/*class InfWord {
  constructor(frequancy, diftong){
    this.frequancy = frequancy;
    this.diftong = diftong;
  };
};*/


function InfWord (word){
  const frequancy = {};
  let char_arr = word.split('');
  let i;
  for (i of char_arr) {
    if (frequancy[i]){
      frequancy[i] +=1;
    } else {
      frequancy[i] = 1;
    };
  }
  console.log(frequancy);
};
InfWord('sssplits');
