const display =document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let startTime , intervalId;

//Define the satrt function that starts the timer

function start(){
    startTime=Date.now();
    intervalId = setInterval(() =>{
        const elapsedTime = Date.now()-startTime
        const seconds = Math.floor(elapsedTime/1000);
        const minutes = Math.floor(elapsedTime/60);

    })
}