
//const tinderUser =new Object()//it is called singleton object
const tinderUser ={}//it is called non-singleton object

//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name ="shiva" 
tinderUser.isLoggedIn = false

//console.log(tinderUser);//{ id: '123abc', name:'shiva',isLoggedIn:false }

const regularUser = {
        email: "some@gmail.com",
        fullname: {
                userfullname: {
                        firstname:"shiva",
                        lastname:"kumar"
                }
        }
}

//console.log(regularUser.fullname.userfullname.firstname);//shiva


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj3 ={obj1,obj2}
//const obj4= Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1,...obj2}
//console.log(obj4);


const users = [
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
        },
    ]
    
    users[1].email
    //console.log(tinderUser);

//     console.log(Object.keys(tinderUser));
//     console.log(Object.values(tinderUser));
//     console.log(Object.entries(tinderUser));//[] inside []

    //console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
    //console.log(tinderUser.hasOwnProperty('isLogged'));//false



    const course = {
        coursename : "js in hindi",
        price : "999",
        courseInstructor: "hitesh"
    }

  //  course.courseInstructor

  const {courseInstructor : instructor} = course
  console.log(instructor);


//   {
//         "name": "hitesh",
//         "coursename": "js in hindi",
//         "price": "free"
//   }

[
        {},
        {},
        {}
]