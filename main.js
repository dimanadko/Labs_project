'use strict'

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
/*function PlainSort(array){
  array.map
};*/
    //let new_item = item.split(' ').length;
    //console.log(new_item);
let complicated_clothes = clothes.map(DoubleWord);
