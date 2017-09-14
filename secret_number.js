'use strict';
module.exports = function() {
  var randomNum;
  return function secretNumber(){
    if(randomNum === undefined){
    randomNum = Math.random() * 1000000;
   }
    return randomNum;
  };
};