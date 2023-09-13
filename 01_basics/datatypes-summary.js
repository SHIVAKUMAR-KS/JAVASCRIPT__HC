// #  Primitive

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;//let userEmail=undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id==anotherId)//false

const bigNumber = 23472346346575n//bigInt

//Reference (Non Primitive)

//Array,object,Function

const heros = ["shaktiman","naagraaj","doga"]
let myObj = {
        name: "shiva",
        age : 22,
}

const myFunction = function(){
        console.log("Hello world");
}

console.log(typeof scoreValue);//number
console.log(typeof myFunction);//function
console.log(typeof heros);//object
console.log(typeof bigNumber);//bigint
console.log(typeof outsideTemp);//object

///to finding the which type of datatypes is there then can we use typeof in console log


// https://262.ecma-international.org/5.1/#sec-11.4.3




//***************memory********************

//stack (Primitive) ,Heap (Non-Primitive or referernce)

let myYoutubename = "shivakumardotcom"

let anothername  = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
        email : "user@google.com",
        upi : "user@ybl"
}

let userTwo  = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


//conclusion from stack we can take copy of dataa and from heap we can take only reference(we can change anything in real data)
