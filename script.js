const timerEl = document.querySelector(".timer");
const message = document.querySelector(".message");

let num = 60000; 

const timer = setInterval(() => {
num -= 1000;
timerEl.textContent = num / 1000;

if (num === 30000) {
    
    message.textContent = "Залишилось 30 секунд";
    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}

if (num <= 0) {
    message.textContent = "Час вийшов!";
    clearInterval(timer);
}
}, 1000);




const timerElTwo = document.querySelector(".timer-two"); 
const btn = document.querySelector(".btn");
const messageTwo = document.querySelector(".messageTwo");

let number = 30000; 

btn.addEventListener("click", () => {
    btn.setAttribute("disabled", "true"); 

const interval = setInterval(() => {
    number -= 1000;
    timerElTwo.textContent = number / 1000; 

    if (number === 10000) {
        messageTwo.removeAttribute('hidden')
        timerElTwo.classList.add("warning");
        setTimeout(() => {
            messageTwo.style.display = 'none';
        }, 3000)
    }

if (number <= 0) {
    clearInterval(interval); 
    btn.removeAttribute("disabled"); 
    timerElTwo.textContent = "Час вийшов!";
    }}, 1000);
});
