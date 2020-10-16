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
    let trial = 0;
    return function repeatPlay(){
        let num = prompt("Угадай число от 1 до 100");
        trial++;

        if (trial == 10){
            let rest = confirm("Попытки закончились, хотите сыграть еще?");
            if(rest){
                wishedNumber = getRandomInt(1,100);
                trial = 0;
                repeatPlay(); 
            }else{
                alert( "Игра окончена");
            };
            
        }else{
            if (num === null) {
                alert( "Игра окончена")
            }else if (!isNumber(num*1)){
                alert("Введи число!");
                repeatPlay();
            }else if (num*1 > wishedNumber) {
                alert("Загаданное число меньше, осталось попыток " + (10-trial));
                repeatPlay();
            }else if (num*1 < wishedNumber) {
                alert("Загаданное число больше, осталось попыток " + (10-trial));
                repeatPlay();
            }else if ( num*1 == wishedNumber) {
                let restart = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                
                if(restart){
                    wishedNumber = getRandomInt(1,100);
                    trial = 0;
                    repeatPlay(); 
                }else{
                    alert( "Игра окончена");
                }
            }
        }

        return trial;  
    }
   
}

start()();