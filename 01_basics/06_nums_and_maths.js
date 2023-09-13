const score = 400

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());//[Number: 100]
//console.log(balance.toString().length);//3
//console.log(balance.toFixed(2));//100.00

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(3));//124
//console.log(otherNumber.toPrecision(5));//123.90

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//**************Maths************* */

// console.log(Math);//object [Maths] {}
// console.log(Math.abs(-4));//abs means absolute //4
// console.log(Math.abs(4));

// console.log(Math.round(4.7));
// console.log(Math.round(4.2));

// console.log(Math.ceil(4.2));//ceil means jsut it will take forward number//5
// console.log(Math.floor(4.2));//floor means just it will take backward number //4

console.log(Math.min(4,3,6,8));//3 (min value)
console.log(Math.max(4,3,6,8));//8 (max value)

console.log(Math.random());// random value lies betweeen 0 to 1
console.log((Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+ min);//this value always greater than min(10) and it can vary