let random = Math.random();

let x = prompt("Enter first number");
let y = prompt('Enter second number');
let opn = prompt('Enter operation');

const obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random > 0.5){
    // Perfom correct operation

    console.log(`${eval(`${x} ${opn} ${y}`)}`)
}else{
    opn = obj[opn];

    console.log(`${eval(`${x} ${opn} ${y}`)}`)
}