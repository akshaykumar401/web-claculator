let display = document.querySelector(".display");
string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "=") {
            if(e.target.innerHTML == "%") {
                string;
            } else if(e.target.innerHTML == "!") {
                string;
            } else {
                string = eval(string);
            }
            display.value = string;
        } else if(e.target.innerHTML == "C") {
            string = "";
            display.value = string;
        } else if(e.target.innerHTML == "!") {
            display.value = `${string}!`;
            if(string < 1) {
                string = 0;
            } else if(string == 1) {
                string = 1;
            } else {
                let fact = 1;
                for (let i = 1; i <= string; i++)
                fact =fact * i;
                string = fact;
            }
        } else if(e.target.innerHTML == "%") {
            display.value = `${string}%`;
            string = string/100;
        } else {
            string = string + e.target.innerHTML;
            display.value = string;
        }
    });
});