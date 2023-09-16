const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num +10 )
// console.log(newNums);//i am not using scope {} then no need to return and when using scopre then use return


// const newNums = myNumbers.map( (num) => {return num + 10 } )
// console.log(newNums);//i am not using scope {} then no need to return and when using scopre then use return

/*
        //output for both just rememebr returning or not
        [
                11,12,13,14,15,
                16,17,18,19,20
        ]
 */



const newNums = myNumbers
                .map( (num) => num *10)
                .map( (num) => num + 1)//upto here 11,21,31,41,51,61,71,81,91,101
                .filter( (num) => num >=40)//upto here 41,51,61,71,81,91,101 because used filter
        console.log(newNums);