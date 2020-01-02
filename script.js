
setInterval(() => {
    let date = new Date();
    clock(date);
    document.getElementById('current-time').innerText=`Current Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}, 1000);

let clock = (date) => {
    let sec = document.getElementById("seconds-hand").style;
    let big = document.getElementById("big-hand").style;
    let short = document.getElementById("short-hand").style;
    sec.transform = `rotate(${date.getSeconds() * 6}deg)`;
    big.transform = `rotate(${date.getMinutes() * 6}deg)`;
    short.transform = `rotate(${date.getHours() * 30 + date.getMinutes() *0.5}deg)`;
}

let alarmVis = () => {
    document.getElementById("alarm-zone").style.visibility = "visible"
}



let alarm = () => {
    let date = new Date();
    let alarmInput = document.getElementById("alarm-input").value;
    console.log(alarmInput);
    let alarmValue = new Date(date.toString().split(":")[0].slice(0, -2) + alarmInput);
    let alarmDuration = alarmValue - date;
    console.log(alarmDuration);
    setTimeout(() => {
        let alarmMessage = document.getElementById("alarm-message").value;
        alert(`Alarm Message: ${alarmMessage}`);
    }, alarmDuration);
}
let minset;
let secset;
let centset;
let hourset;
let stopWatch = () => {
    document.getElementById("stopBtn").style.visibility = "visible";
    document.getElementById("resetBtn").style.visibility = "visible";

    let centSec = 0;
    let sec = 0;
    let min = 1;
    let hour = 1;
    document.getElementById("centsec").innerText = `00`;
    document.getElementById("sec").innerText = `00`;
    document.getElementById("min").innerText = `00`;
    document.getElementById("hour").innerText = `00`;
    centset = setInterval(() => {
        if (centSec < 10) {
            document.getElementById("centsec").innerText = `0${centSec}`;
            centSec++;
        } else if (centSec == 10) {
            centSec=0
        }
        
    }, 100)
    secset = setInterval(() => {
        if (sec < 10) {
            document.getElementById("sec").innerText = `0${sec}`;
        } else if (sec > 10) {
            document.getElementById("sec").innerText = `${sec}`;
        }
        sec++
        if (sec == 60) {
            sec = 0;
        }
    }, 1000)
    minset = setInterval(() => {
        if (min < 10) {
            document.getElementById("min").innerText = `0${min}`;
        } else if (min > 10) {
            document.getElementById("min").innerText = `${min}`;
        }
        min++
        if (min == 60) {
            min = 0;
        }
    }, 60000)
    hourset = setInterval(() => {
        if (hour < 10) {
            document.getElementById("hour").innerText = `0${hour}`;
        } else if (hour > 10) {
            document.getElementById("hour").innerText = `${hour}`;
        }
        hour++
        if (hour == 60) {
            hour = 0;
        }
    }, 60 * 60000)
}

let stopStpWatch = () => {
    clearInterval(centset);
    clearInterval(secset);
    clearInterval(minset);
    }

let resetTimer = () => {
    clearInterval(centset);
    clearInterval(secset);
    clearInterval(minset);
    document.getElementById("centsec").innerText = `00`;
    document.getElementById("sec").innerText = `00`;
    document.getElementById("min").innerText = `00`;
    document.getElementById("hour").innerText = `00`;
}

let stopwatchVis = () => {
    document.getElementById("stopwatch-display").style.visibility = "visible";
}
let timerClock;
let stopTimer = () => {
    clearInterval(timerClock);
}

let timer = () => {
    let timerip = document.getElementById("timer-input").value;
    // console.log(timerip)
    // let date = new Date(timerip);
    timerip = timerip.split(":");
    let [ipHour, ipMinute, ipSec] = timerip;
    // console.log(timerip, ipHour, ipMinute, ipSec)
    document.getElementById("timermin").innerText = ipMinute; 
    document.getElementById("timersec").innerText = ipSec; 
    document.getElementById("timerhour").innerText = ipHour; 
    timerClock = setInterval(() => {
        ipSec--;
        if (ipSec == 0){
            ipSec = 59;
            ipMinute--;
        }
        if (ipMinute == 0 && ipSec == 0) {
            ipMinute = 59;
            ipHour--;
        }
        if (ipHour == 0 && ipMinute == 0 && ipSec == 0) {
            stopTimer();
            alert("Timer has been Ended");
        }

        document.getElementById("timermin").innerText = ipMinute; 
        document.getElementById("timersec").innerText = ipSec; 
        document.getElementById("timerhour").innerText = ipHour;   
    },1000)
}