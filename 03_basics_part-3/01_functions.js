function sayMyName(){
     console.log("s");
     console.log("h");
     console.log("i");
     console.log("v");
     console.log("a");
}

//sayMyName()//sayMyName is reference and sayMyName() is execute


//function addTwoNumber(number1 ,number2){
        //console.log(number1+number2);
//}

// addTwoNumber()//NaN
// addTwoNumber(23,23)//46
// addTwoNumber(23,"2")//232
// addTwoNumber(3,"a")//3a
// addTwoNumber(3,null)//3

function addTwoNumber(number1,number2){
        let result = number1+number2
        return result
        //after returning the result nothing will print like:
        //console.log("SHiva");//it will not print if it will above return then will print
}

const result = addTwoNumber(3,5)
//console.log("Result is : ",result);//Result is : 8


function loginUserMessage(username){

        if(username == undefined){
                console.log("PLease enter e username:");
                return
                
        }
        return `${username} just logged in `
}
//console.log(loginUserMessage("SHiva"));//SHiva just logged in
//console.log(loginUserMessage());//undefined just logged in


function calculateCartPrice(...num1){
        return num1
}

//console.log(calculateCartPrice(200,400,500,600));

const user  = {
        username: "shiva",
        price: 199
}

function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and  price is ${anyobject.price}`);
}

handleObject(user)//USername is shiva and price is 199
handleObject({
        username: "sam",
        price: 399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
        return getArray[3]
}
//console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200,400,500,1000]));