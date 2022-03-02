const p1 = {
    score: 0,
    button: document.querySelector(".player-one-btn"),
    display: document.querySelector("#p1Display"),
}

const p2 = {
    score: 0,
    button: document.querySelector(".player-two-btn"),
    display: document.querySelector("#p2Display"),
}



const resetBtn = document.querySelector(".reset-btn")
const winningScoreSelect = document.querySelector("#playto")


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score == winningScore) { 
         isGameOver = true;
         player.display.classList.add("has-text-success");
         opponent.display.classList.add("has-text-danger")
         player.button.disabled = true;
         opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener("click", function() {
   updateScores(p1, p2) 
})

p2.button.addEventListener("click", function() {
    updateScores(p2, p1) 
 })


winningScoreSelect.addEventListener("change",function() {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener("click", reset)

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger")
        p.button.disabled = false;
    }
}
//loop is better when there are more players


// const p1Display = document.querySelector("#p1Display")
// const p2Display = document.querySelector("#p2Display")
// const p1Button = document.querySelector(".player-one-btn")
// const p2Button = document.querySelector(".player-two-btn")

// p1Button.addEventListener("click",function() {
//     if (!isGameOver) {
//         p1Score += 1;
//         if (p1Score == winningScore) { 
//          isGameOver = true;
//          p1Display.classList.add("has-text-success");
//          p2Display.classList.add("has-text-danger")
//          p1Button.disabled = true;
//          p2Button.disabled = true;
//         }
//         p1Display.textContent = p1Score;
//     }
// })


// p2Button.addEventListener("click",function() {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score == winningScore) { 
//          isGameOver = true;
//          p2Display.classList.add("has-text-success");
//          p1Display.classList.add("has-text-danger")
//          p1Button.disabled = true;
//          p2Button.disabled = true;
//         }
//         p2Display.textContent = p2Score;
//     }
// })
// function reset() {
//     isGameOver = false;
//     p1.score = 0;
//     p2.score = 0;
//     p1.display.textContent = 0;
//     p2.display.textContent = 0;
//     p2.display.classList.remove("has-text-success", "has-text-danger")
//     p1.display.classList.remove("has-text-danger", "has-text-success")
//     p1.button.disabled = false;
//     p2.button.disabled = false;
// }
