//singleton
//object.create


//object literal

const mySym = Symbol("key1")

const JsUser = {
        name: "Shiva",
        "full name ": "shiva kumar",
        [mySym]: "mykey1",
        age: 18,
        location: "Jaipur",
        email: "shiva@gmail.com",
        isLoggedIn : false,
        isLoggedinDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
//console.log(typeof JsUser.mySym);


JsUser.email= "shiva@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "shiva@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
        console.log("Hello js user");
}
JsUser.greetingTwo = function(){
        console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//Note : only these things is important we can acces object by .(dot),[] (square bracket),symbol