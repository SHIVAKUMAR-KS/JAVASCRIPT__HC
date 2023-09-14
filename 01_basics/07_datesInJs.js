///Dates

let myDate = new Date()
//console.log(myDate);//2023-09-14T04:56:46.704z

// SOME DATE AND TIME METHOD
// console.log(myDate.toString());//Thu Sep 14 2023 10:26:46
// console.log(myDate.getTime());// 16982747484(in milli second)
// console.log(myDate.getFullYear());//2023
// console.log(myDate.getDay());//4 because this is thur(4)
// console.log(myDate.getMonth());//8
// console.log(myDate.getHours());//10 (becauese already 10 hours is completed from 24)

// console.log(myDate.toDateString());//Thu Sep 14 2023
// console.log(myDate.toTimeString());//10:26:46
// console.log(myDate.toLocaleDateString());//14/9/2023
// console.log(myDate.toLocaleString());//14/9/2023, 10:41:56
// console.log(myDate.toJSON());
// console.log(myDate.toString());//Thu Sep 14 2023 10:26:46
// console.log(myDate.toLocaleTimeString());//10:41:56


let myCreatedDate = new Date(2023,8,14)
// console.log(myCreatedDate.toDateString());//Thu Sep 14 2023
// console.log(myCreatedDate.toLocaleString());//14/9/2023, 12:00:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);//2023-09-14t05:58:59
console.log(newDate.getMonth());//8
console.log(newDate.getDay());//4

`Today is the day ${newDate.getDay()} and the month is ${newDate.getMonth()}`

newDate.toLocaleString('default',{
        weekday: "long"
})
