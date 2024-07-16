let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 24;
let breakTime = 4;

let seconds = "59";

let audio = new Audio("audio/Meow Sound Effect.mp3"); //add audio later
let play = document.getElementById('start');

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');

    audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
      });
}

function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;
    
    let workMinutes = workTime;
    let breakMinutes = breakTime;

    breakCount = 0;

    let timerFunction = () => {
        seconds = seconds - 1;
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;        

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1 ){
                if(breakCount % 2 === 0) {
                    workMinutes = breakMinutes;
                    seconds = 59;
                    breakCount++

                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                    
                }else {
                    workMinutes = workTime;
                    seconds = 59;
                    breakCount++

                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
                audio.play();
            }
            seconds = 59;
        }
    }
    setInterval(timerFunction, 1000);
}
