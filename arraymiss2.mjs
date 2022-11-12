
let num = [ 11,14,18,19];

let x = num[0]; 
let y = num[num.length-1];
let miss = [];
console.log(num)
for(let i = x; i <= y; i++){
   if(num.indexOf(i) === -1){
    miss.push(i)
   }
  
    
}
console.log(miss)
