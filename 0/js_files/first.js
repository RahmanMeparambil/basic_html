window.alert("hello_world");
let username = window.prompt("whats your name ?");
document.getElementById("first_line").innerHTML = "hi "+username;

document.getElementById('submit_button').onclick = function()
{
    let age = document.getElementById("age_input").value;
    age = 2023 - age;
    document.getElementById("age_line").innerHTML = "your dob "+age ;
}
let age = document.getElementById("age_input").value;
// lets check the type of variable inside
console.log(age,typeof age);
age = Number(age);
console.log(age,typeof age);
 