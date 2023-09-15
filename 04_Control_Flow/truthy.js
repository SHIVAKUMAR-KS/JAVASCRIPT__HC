const userEmail = []

if(userEmail){
        console.log("Got user email");
}else{
        console.log("Dont have user email");
}

//fasly value


// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");//Array is empty
// }

const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
        console.log("Object is empty");
}

// Nullish coaleseing Operator (???): undefined

let val1;
//val1 = 5 ?? 10  //5
//val1 = null ?? 10  //10
//val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 15  //10


console.log(val1);


//Ternary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80");