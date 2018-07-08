'use strict';
module.exports = function() {
    var randomNumber = Math.floor(Math.random()*1000001);
    console.log(randomNumber)
    return function() {
        return randomNumber;
    }
    
};