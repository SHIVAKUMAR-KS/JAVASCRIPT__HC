// for of 

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
        //console.log(num);// 1 to 5
        
}

const greeting = "Hello world!"
for (const greet of greeting) {
        //console.log(`Each char is ${greet}`);//Each char is H to !
}

//Maps

const map = new Map()
map.set('IN ',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map);
//output :
/*
        Map(4){
                'IN' => 'India'
                'USA' => 'United state of America'
                'Fr' => 'France'
                'IN' => 'India'
        }
 */

for (const [key,value] of map) {
       // console.log(key, ':-',value);
        /*
                //output
                IN :- India
                USA :- United state of America
                Fr :- France
                IN :- India
        }
         */
        
}

const myObject = {
        game1 : 'NFS',
        game2 : 'Spiderman'
}

// for (const [key,value] of myObject) {
//         console.log(key, ':-',value);
        
// }//here myObject is not iterable becuase here i we should to use "for in" not "for of"