const uChoice = document.getElementById("uChoice");
const cChoice = document.getElementById("cChoice");
const winner = document.getElementById("winner");
const reloadBtn = document.querySelector(".rel");
const pScore = document.querySelector('.myPoint');
const cScore = document.querySelector('.compPoint');
const moves = document.querySelector('.moves');
const Result = document.querySelector('.Result');
const btn = document.querySelector('.btn');
const up = document.querySelector(".up");
const rps = document.querySelector(".rps");
const icons = document.querySelector(".icons");
const movescount = document.querySelector(".movescount");
const game = document.querySelector(".game");
const afterGameOver = document.querySelector("#afterGameOver");


let p_point = 0;
let c_point = 0;
let move = 10;

const computerChoice = ['💎','🖐','🤞'];

function displaySomething(){
    up.style.display = "none";
    rps.style.display = "none";
    movescount.style.display = "none";
    winner.style.display = "none";
    icons.style.display = "none";
    game.style.height = "40vh"
}


const win = () => {
    winner.innerHTML = "You win";
    winner.style.color = "#f4837d";
    winner.style.fontWeight = "bold";
}
const lose = () => {
    winner.innerHTML = "You lose";
    winner.style.color = "black";
    winner.style.fontWeight = "bold";
}
const tie = () => {
    winner.innerHTML = "Match tie";
    winner.style.color = "Yellow";
    winner.style.fontWeight = "bold";
}


userClick = (userChoice) => {
    uChoice.innerHTML = "";
    uChoice.innerHTML = userChoice;
    compClick();
}

function compClick() {
    const computerChoice = ['👊','🖐','✌'];
    cChoice.innerHTML = computerChoice[Math.floor(Math.random() * 3)];  
    winnerDeclare();
}

function winnerDeclare(){

    
    if(uChoice.innerHTML === '👊'){
        if (cChoice.innerHTML === '🖐') {
            lose();
            move--;
            c_point++;
            cScore.innerHTML = `${c_point}`;
            moves.innerHTML = `${move}`;
        }else if(cChoice.innerHTML === '✌'){
            win();
            move--;
            p_point++;
            pScore.innerHTML = `${p_point}`;
            moves.innerHTML = `${move}`;
        }else{
            tie();
            move--;
            moves.innerHTML = `${move}`;
        }
    }
    else if(uChoice.innerHTML === "🖐"){
        if (cChoice.innerHTML === "👊") {
            win();
            move--;
            p_point++;
            pScore.innerHTML = `${p_point}`;
            moves.innerHTML = `${move}`;
        } else if(cChoice.innerHTML === "✌"){
            lose();
            move--;
            c_point++;
            cScore.innerHTML = `${c_point}`;
            moves.innerHTML = `${move}`;
        }else{
            tie();
            move--;
            moves.innerHTML = `${move}`;
        }
    }
    else{
        if (cChoice.innerHTML === "🖐") {
            win();
            move--;
            p_point++;
            pScore.innerHTML = `${p_point}`;
            moves.innerHTML = `${move}`;
        } else if(cChoice.innerHTML === "👊"){
            lose();
            move--;
            c_point++;
            cScore.innerHTML = `${c_point}`;
            moves.innerHTML = `${move}`;
        }else{
            tie();
            move--;
            moves.innerHTML = `${move}`;
        }
    }
    
    if(move == 0){
        moves.innerHTML = 10;
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
        winner.style.color = "orange";
        btn.style.display = "block"; 
        displaySomething();
        afterGameOver.innerHTML = "GAME OVER...!!! TRY AGAIN"
    }

    if(p_point == 5 ){
        winner.innerHTML = "You won the game";
        winner.style.color = "orange";
        btn.style.display = "block";
        displaySomething();
        afterGameOver.innerHTML = "HURRAY 🎉🎉 !!! You won the game"
    }
    if(c_point == 5){
        winner.innerHTML = "You lose the game";
        winner.style.color = "orange";
        btn.style.display = "block";
        displaySomething();
        afterGameOver.innerHTML = "SORRY 😭😭 !!! You lose the game"

        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
    }
    if(move == 0 && p_point == 5){
        winner.innerHTML = "You won the game";
        afterGameOver.innerHTML = "HURRAY 🎉🎉 !!! You won the game"

        winner.style.color = "Purple";
        btn.style.display = "block";
        displaySomething();
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
    }
    if(move == 0 && c_point == 5){
        winner.innerHTML = "You lose the game";
        afterGameOver.innerHTML = "SORRY 😭😭 !!! You lose the game"

        btn.style.display = "block";
        displaySomething();
        winner.style.color = "Purple";
        pScore.innerHTML = 0;
        cScore.innerHTML = 0;
    }
}
function reloadd(){
    window.location.reload();
}




btn.addEventListener("click",reloadd)