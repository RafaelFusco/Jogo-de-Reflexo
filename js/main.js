//------------- SISTEMA DOS ALVOS -----------------

let targets = document.querySelectorAll("#target")
let n = 0

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function active() {
    let result = randomNumber(0, 27)
    targets[result].classList.add("active")

    targets.forEach(element => {
        if (element.classList.contains("active")) {
            element.addEventListener("click", function () {
                element.classList.add("hit")

                let pontos = document.querySelector("#spots")
                pontos.innerHTML = `${(n += 1)}` 
            },{once : true})
        }
    }); 
}

//------------- SISTEMA DE COMEÇAR E PAUSAR -----------------

let interval = setInterval(() => {
        
    if (startButton.style.display == "none") {

        targets.forEach(element => {
            element.classList.remove("active")
            element.classList.remove("hit")
        });
        active()
    }else if (startButton.style.display == "block") {

        element.classList.remove("active")
        element.classList.remove("hit")
        clearInterval(interval)
    }
        }, 1000);

//------------- BOTOES -----------------

function help() {
    let alert = document.getElementById("notice")

    if (alert.style.opacity == "1") {
        alert.style.opacity = "0"
    } else {
        alert.style.opacity = "1"
    }
}
    
let startButton = document.getElementById("start")

function start() {
    startButton.style.display = "none"
    finishButton.style.display = "block"
}

let finishButton = document.getElementById("finish")

function finish() {
    startButton.style.display = "block"
    finishButton.style.display = "none"
}