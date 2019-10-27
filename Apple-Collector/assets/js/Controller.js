let score = 0,
    highScore = 0,
    time = 30;
    Timer = 0;
let isPlay = false;
let timeBoard = document.getElementById('time'),
    scoreBoard = document.getElementById('score'),
    buttonStart = document.getElementById('btn');

    function fallDown(apple) {
        if(!isPlay && apple instanceof HTMLElement){
            return;
        }
        
        //change postion apples
        apple.setAttribute('data-top', apple.style.top);
        apple.style.top = "380px";
        score += 5;
        renderScore();
        
        //hide apple at fall
        hideAppleInFall(apple);
}


function hideAppleInFall(apple) {
    setTimeout(function () {
        apple.style.display = 'none';
        // 0.5 secound
        reStoreApple(apple);
    }, 501);
}

// default position from in-line-style
function reStoreApple(apple) {
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function () {
        apple.style.display = 'inline-block';
    }, 501);
}

function StartGame(){
    buttonStart.disabled = "disabled",
    isPlay=true;
    renderScore();
    Timer = setInterval(coutDown,1000)
}
function coutDown(){
    time -= 1;
    timeBoard.innerText = time;
    if(time == 0){
        clearInterval(Timer);
        endGame();
    }
}
function endGame(){
    isPlay = false;
    alert("Your score"+score);
    score = 0;
    time = 30;
    buttonStart.removeAttribute('disabled');
}
function renderScore() {
    scoreBoard.innerText = score;
    if(score > highScore){
        highScore = score;
        document.getElementById('high').innerText = highScore;
    }
}