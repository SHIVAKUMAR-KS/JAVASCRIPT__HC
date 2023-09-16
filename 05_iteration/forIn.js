//for in


const myObject = {
        js: 'javascript',
        cpp: 'c++',
        rb: 'ruby',
        swift: 'swift by apple'
}

for (const key in myObject) {
        
       // console.log(`${key} shortcut is for ${myObject[key]}`);
        /*
                //output
                js shotcut is for javascript
                cpp shotcut is for c++ 
                rb shotcut is for ruby 
                swift shotcut is for swift by apple  
        */
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
       
        //console.log(programming[key]);
        /*
           //output
           js
           rb
           py
           java
           cpp 
        */

}

// const map = new Map()
// map.set('IN ',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// map.set('IN',"India")


// for (const key in map) {//here forin is not applicable
//        console.log(key);
// }