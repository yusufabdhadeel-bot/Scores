let currentScore = document.getElementById("hScore")

function increaseBy1() {
    currentScore.innerText ++
}

function increaseBy2() {
    let  crr = Number(currentScore.textContent) + 2
    currentScore.innerText = crr
}

function increaseBy3() {
    let  crr = Number(currentScore.textContent) + 3
    currentScore.innerText = crr
}

let currScore = document.getElementById("aScore")

function increaseeBy1() {
    currScore.innerText ++
}

function increaseeBy2() {
    let  crr = Number(currScore.textContent) + 2
    currScore.innerText = crr
}

function increaseeBy3() {
    let  crr = Number(currScore.textContent) + 3
    currScore.innerText = crr
}
