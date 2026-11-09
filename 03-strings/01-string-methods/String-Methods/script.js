let userName = " BroCode ";
let phoneNumber = "123-456-789";
phoneNumber = phoneNumber.padEnd(15,"0");
console.log(phoneNumber);
/* phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber); */
/* userName = userName.repeat(3);
console.log(userName.charAt(2));
console.log(userName.indexOf("o"));
console.log(userName.length);
userName = userName.trim();
console.log(userName);
userName = userName.toUpperCase();
userName = userName.toLowerCase(); */


/* let result = userName.startsWith(" "); */
let result = userName.includes(" ");
if(result)
{console.log("Your username can't includes ' ' ");
}
else{
    console.log(userName);
}


