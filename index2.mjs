import PromptSync from "prompt-sync";
const prompt = PromptSync();

let height = prompt("Enter Height in Inches:");
let weight = prompt("Enter weight in pounds:");
var Iheight = height * 2.54 / 100;
var Kweight = weight / 2.2046;
var Sheight = Iheight * Iheight;
var Bmi = Kweight / Sheight ;
console.log("Your BMI is:",Bmi);








