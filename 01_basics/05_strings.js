const name = "shiva"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my  current repoCount is ${repoCount}`);//Hello my name is shiva and my current repocount is 50


const gameName = new String('hiteshhc')

// console.log(gameName[0]);//h
// console.log(gameName.__proto__);//{}

// console.log(gameName.length);//8
// console.log(gameName.toUpperCase());//HITESHHC


// console.log(gameName.charAt(2));//t
// console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0,4)//hite only 4 digits
//console.log(newString);//hite

const anotherString = gameName.slice(-8,4)
//console.log(anotherString);//hite

const newStringOne = "    hitesh   "
// console.log(newStringOne);//    hitesh
// console.log(newStringOne.trim());//hitesh


const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20','_'));//https://hitesh.com/hitesh_choudhary
// console.log(url.includes('hitesh'));//true
// console.log(url.includes('suresh'));//false

// console.log(gameName.split('_'));



console.log(gameName.concat("sir"));//hiteshchsir

const str = "apple,banana,orange"
console.log(str.split(","));//['apple' , 'banana' , 'orange']
