import PromptSync from "prompt-sync";

const prompt = PromptSync();

let x = parseFloat(prompt("Enter first number:"))
let y = parseFloat(prompt("Enter second number:"))
let z = prompt("Enter operator:")
let a;
if(z === "+"){
    a = x+y; 
}
if(z === "-"){
    a = x - y; 
}
if(z === "*"){
    a = x * y; 
}
if(z === "/"){
    a = x / y; 
}
console.log("Answer is ",a)