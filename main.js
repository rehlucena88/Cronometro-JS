"use strict"

let btn = document.querySelectorAll('button');
let time = document.querySelector('#cronometro');
let millis = 0;
let date = new Date();
let timer;




date.setHours(0, 0, 0 ,0);// seta a hora em zero toda vez que vai começar um ciclo

 // star do cronometro
btn[0].addEventListener("click",() => {
  timer = setInterval(showTime, 100)
});

//stop do cronometro
btn[1].addEventListener("click",() => {
    clearInterval(timer);
});

// zera o cronometro
btn[2].addEventListener("click",() => {       
    clearInterval(timer);
    time.innerHTML = '00:00:00:000';
    millis = 0;
});


function showTime() {
    millis +=100;
    date.setHours(0, 0, 0, millis);

    let h = ( date.getHours() <10 ? "0" : "" ) + date.getHours(); //todo inicio de ciclo a hora minuto ou segundo form menor que 10 adiciona a string 0
    let m = (date.getMinutes() <10 ? "0" : "") + date.getMinutes();
    let s = (date.getSeconds() <10 ? "0" : "") + date.getSeconds();
    
    time.innerHTML = `${h}:${m}:${s}:${date.getMilliseconds()}`;
};


