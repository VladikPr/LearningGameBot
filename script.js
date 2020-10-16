'use strict';

// Function that checks if entered value is number 
function isNumber(val){
    return !isNaN(parseFloat(val)) && isFinite(val);
}

// Variables declaration
//Create a random integer between two numbers
function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
}



function start() {
    let wishedNumber = getRandomInt(1,100);

    return function repeatPlay(){
        let num = prompt("Угадай число от 1 до 100");

        if (num === null) {
            alert( "Игра окончена")
        }else if (!isNumber(num*1)){
            alert("Введи число!");
            repeatPlay();
        }else if (num*1 > wishedNumber) {
            alert("Загаданное число меньше. Попробуйте снова");
            repeatPlay();
        }else if (num*1 < wishedNumber) {
            alert("Загаданное число больше. Попробуйте снова");
            repeatPlay();
        }else if ( num*1 == wishedNumber) {
            alert("Поздравляю, Вы угадали!!!");
        }

    }
    

}

start()();

