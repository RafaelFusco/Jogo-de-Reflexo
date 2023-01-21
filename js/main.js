let alvos = document.querySelectorAll("#alvo")
let n = 0

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function active() {
    let result = randomNumber(0, 27)
    alvos[result].classList.add("active")

    alvos.forEach(element => {
        if (element.classList.contains("active")) {
            element.addEventListener("click", function () {
                element.classList.add("hit")

                let pontos = document.querySelector("#pontos")
                pontos.innerHTML = `${(n += 1)}` 
            },{once : true})
        }
    }); 
}

function start() {
    let button = document.querySelector("button")
    button.style.visibility = "hidden"
    active()

    setInterval(() => {
        alvos.forEach(element => {
            element.classList.remove("active")
            element.classList.remove("hit")
        });
        active()
    }, 1000);
}


