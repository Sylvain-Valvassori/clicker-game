let score = 0;

let scoreContainer = document.getElementById('score');
document.getElementById('ghost').addEventListener('click', () => {
    scoreContainer.innerHTML = "";
    (sumOfMultiplier() === 0 ) ? score++ : Math.round(score += 1 * sumOfMultiplier());
    scoreContainer.innerHTML += score;
    
    (score < palier1.price) ? btn1.setAttribute("disabled", true) : btn1.removeAttribute("disabled");
    (score < palier2.price) ? btn2.setAttribute("disabled", true) : btn2.removeAttribute("disabled");
    (score < palier3.price) ? btn3.setAttribute("disabled", true) : btn3.removeAttribute("disabled");
    (score < palier4.price) ? btn4.setAttribute("disabled", true) : btn4.removeAttribute("disabled");
    (score < palier5.price) ? btn5.setAttribute("disabled", true) : btn5.removeAttribute("disabled");
})



let mySong = document.getElementById("spookySong");
let icon   = document.getElementById("icon");

icon.onclick = () => { 
    if (mySong.paused){
        mySong.play();
        icon.src= './assets/images/pause.png';
    }else{
        mySong.pause();
        icon.src= './assets/images/play.png';
    }
}