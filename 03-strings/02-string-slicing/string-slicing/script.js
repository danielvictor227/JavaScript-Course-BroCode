// string slicing = creating a substring froma  portion of another string string.slice(start,ent)

const fullName = "Bro Code";

let firstName = fullName.slice(0,3); // last character is excluse
let lastName = fullName.slice(4);

let firstChar = fullName.slice(0,fullName.indexOf(" "));
let lastChar = fullName.slice(fullName.indexOf(" "));


console.log(firstName);
console.log(lastChar);

const email = "dani1@gmail.com";
let extention = email.slice(0, email.indexOf("@"))
let username = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extention);
