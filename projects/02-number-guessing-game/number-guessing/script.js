let user;
const random = Math.floor(Math.random() * (100 - 1 + 1) + 1)
let check = false;
do
{
    user = window.prompt("Guess a number between 1-100");
    user = Number(user);
    if(Number.isInteger(user) === false)
    {
        window.alert("Please insert a number")
    }
     else if(user <= 0 || user > 100)
    {
        window.alert("The number should to be between 1-100")
    }
    else if(user < random)
    {
        window.alert("To LOW! Try Again");
    }
    else if(user > random)
    {
        window.alert("To HIGH! Try Again!");
    }
    else if(user === random)
    {
        window.alert("YOU WERE RIGHT! CONGRANTULATIONS!"); 
        check = true;
    }
} while(check === false)