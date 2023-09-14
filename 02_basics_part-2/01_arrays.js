//Arrays//

const myArr = [1,2,3,4]
//console.log(myArr);// [1,2,3,4]
//console.log(myArr[3]);//4

const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);//2


///Array methods

// myArr.push(6)
// console.log(myArr);//[1,2,3,4,6]
// myArr.push(7)
// console.log(myArr);//[1,2,3,4,6,7]
// myArr.pop()
// console.log(myArr);

myArr.unshift(9)//unshift means adding element in starting and give parameter according to your choice
//console.log(myArr);

myArr.shift()//shift means deleteing element from starting and no need to give parameter
//console.log(myArr);
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(1));//false //basically index will check elment is present or not it it is present then return true else false in 2,3,4 so here is not presnt 1 so false
// console.log(myArr.indexOf(1));// not present mean index -1
// console.log(myArr.includes(3));//true  //basically index will check elment is present or not it it is present then return true else false in 2,3,4 so here is  presnt 3 so true
// console.log(myArr.indexOf(3));//1


const newArr = myArr.join()
// console.log(myArr);//[1,2,3,4]
// console.log(newArr);//1,2,3,4

///slice,splice*****************

console.log("A==>",myArr);//A==> [1,2,3,4]

const myn1 = myArr.slice(1,3)//[2,3]
console.log(myn1);
console.log("B==>",myArr);//B==> [1,2,3,4]

const myn2 = myArr.splice(1,3)
console.log("c==>",myArr);//c==> [1]
console.log(myn2);//[2,3,4]
