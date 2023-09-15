//for

for (let i = 0; i <= 10; i++) {
        const element = i;
        if (element ==5) {
               // console.log("5 is best number ");
        }
        //console.log(element);// print number  from 1 to 10 
        
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
        //console.log(`Outer loop value : ${i}`);
        for (let j = 1; j <= 10; j++) {
               // console.log(`Inner loop value ${j} and inner loop ${i}`);
               //console.log(i + '*' + j + ' = ' + i*j);//table print form 1 to 10 all 
                
        }
        
}


let myArray = ["flash","batman","superman"]

//console.log(myArray.length);//3 (array number)
for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        //console.log(element);//flash,batman,superman

        
}

//break and continue

for (let i = 0; i <=20 ; i++) {
        if(i == 5){
               // console.log(`Detected 5`);
                break//break will continousaly break
        }
        //console.log(`value of i is ${i}`);
}
for (let i = 0; i <=20 ; i++) {
        if(i == 5){
                console.log(`Detected 5`);
                continue//continue keyboard will ignore once 
        }
        console.log(`value of i is ${i}`);
}

