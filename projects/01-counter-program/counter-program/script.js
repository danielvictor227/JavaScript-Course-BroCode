let number = document.getElementById("number");
const increase = document.getElementById("button1");
const decrease = document.getElementById("button3");
const reset = document.getElementById("button2");
let counter = 0;


increase.onclick = function(){
    counter++;
    number.textContent = counter;
}

decrease.onclick = function()
{
    counter--;
    number.textContent = counter;
}

reset.onclick = function()
{
    number.textContent = 0;
    counter = 0;
}

