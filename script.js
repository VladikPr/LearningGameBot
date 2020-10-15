'use strict';

// Function that checks if entered value is number 
function isNumber(val){
    return !isNaN(parseFloat(val)) && isFinite(val);
}
// Variables declaration
//Create a random integer between two numbers
function getRandomInt() {
    let min = 1;
    let max = 100;
    return function(){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min)) + min;
    }
}
let targetNumber = getRandomInt();
let wishedNumber = targetNumber();


function trialNumber() {
    let trial = 0;
    return function(){
        trial++;
        return trial;
    }
}

let counter = trialNumber();

function getNumber() {
    let i = 10 - counter();

    let num = prompt("Угадай число от 1 до 100");

    if (i == 0){
        let rest = confirm("Попытки закончились, хотите сыграть еще?");
        if(rest){
            wishedNumber = targetNumber();
            counter = trialNumber();
            getNumber(); 
        }else{
            alert( "Игра окончена");
        };
        
    }
        if (num === null) {
            alert( "Игра окончена")
        }else if (!isNumber(num*1)){
            alert("Введи число!");
            getNumber();
        }else if (num*1 > wishedNumber) {
            alert("Загаданное число меньше, осталось попыток " + i);
            getNumber();
        }else if (num*1 < wishedNumber) {
            alert("Загаданное число больше, осталось попыток " + i);
            getNumber();
        }else if ( num*1 == wishedNumber) {
            let restart = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            
            if(restart){
                wishedNumber = targetNumber();
                targetNumber = getRandomInt(1,100);
                counter = trialNumber();
                getNumber(); 
            }else{
                alert( "Игра окончена");
            }
        }
}

getNumber();


