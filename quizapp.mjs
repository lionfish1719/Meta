import PromptSync from "prompt-sync";

const prompt = PromptSync();

console.log("Quiz is started, answer the following questions")
let q1 = prompt("What is Pakistans Capital City?")



if( q1 == "Islamabad")
{
    console.log("Answer 1 is correct")
}
else if(q1 != "Islamabad"){
    console.log("Answer 1 is wrong")
}
let q2 = prompt("What is Pakistans National Language?")
if( q2 == "Urdu")
{
    console.log("Answer 2 is correct")
}
else if(q2 != "Urdu"){
    console.log("Answer 2 is wrong")
}
let q3 = prompt("What is Pakistans largest city?")
 if( q3 == "Karachi")
{
    console.log("Answer 3 is correct")
}
else if(q3 != "Karachi"){ 
    console.log("Answer 3 is wrong")
}