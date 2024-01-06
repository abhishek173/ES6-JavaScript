// let and const
 
// arrow functions - functions

//template literals - ``

// default parameters -> jab aap value na de function param ko to wo  default value le ske 

// rest and spread operator 

// ...spread/rest

// a = [1,2,3,4,5,6]
// b = [...a]

// console.log(a)
// console.log(b)

// function abcd(a,b,c,...d){
//    console.log(a,b,c,d)
// }

// abcd(1,2,3,4,5,6,7,8)


// destructuring = array and object se data bahar nikalna

// var a = [1,2,3]
// var [b,c,d,e] = a

// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// var obj = {name:"harsh",age:24}

// var {age} = obj
// console.log(age)

// var a = [1,2,3]
// var [b,,c] = a
// console.log(b)
// console.log(c)

// classes to make object from a particular blueprint

// var ans = new Promise((resolve,reject)=>{
//     if (true){
//         return resolve();
//     }
//     else{
//         return reject();
//     }
// })

// ans.then(()=>{
//     console.log("resolve hua tha");
// }).catch(()=>{
//     console.log("reject hua tha")
// })

// user will ask for a number between 0 to 9 , if the number is below 5 then resolve else reject 

// var ans = new Promise((resolve,reject)=>{
//     //generate a number between 0  to 9
//     var n = Math.floor(Math.random()*10)
//     if (n<5){
//         return resolve()
//     }else{
//         return reject()
//     }
// })

// ans.then(()=>{
//     console.log("below")
// }).catch(()=>{
//     console.log("Above")
// })

