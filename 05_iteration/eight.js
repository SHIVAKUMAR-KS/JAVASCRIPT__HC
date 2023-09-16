const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc,currval) {
        console.log(`acc: ${acc} and currval :${currval}`);
        return acc  + currval
},0 )
console.log(myTotal);//6

/*      
        //output
        acc: 0 and currval :1 //0+1=1
        acc: 1 and currval :2 // 1+2=3
        acc: 3 and currval :3 // 3+3=6
        6
*/

const shoppingCart = [
        {
                itemName: "js course",
                price: 499
        },
        {
                itemName: "python course",
                price: 999
        },
        {
                itemName: "mobile course",
                price: 5999
        },
        {
                itemName: "data science course",
                price: 12999
        },
]

const priceToPay = shoppingCart.reduce( (acc,item) => item.price,0)

console.log(priceToPay);