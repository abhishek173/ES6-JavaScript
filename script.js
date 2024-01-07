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


//sabse pahle ghar aao
// gate kholo aur gate lgao
// khana pkao aur khana khao
// incognito mode chlao
// so jao

// var ans = new Promise(function(resolve,reject){
//     return resolve("sabse pahle ghar pe aao")
// })

// var p2 = ans.then((data)=>{
//     console.log(data)
//     return new Promise((resolve,reject)=>{
//         return resolve("gate kholo aur gate lgao")
//     })
// })

// var p3 = p2.then((data)=>{
//     console.log(data)
//     return new Promise((resolve,reject)=>{
//         return resolve("khana pkao aur khana khao")
//     })
// })

// var p4 = p3.then((data)=>{
//     console.log(data)
//     return new Promise((res,rej)=>{
//         return res("incognito mode chlao")
//     })
// })

// var p5 = p4.then((data)=>{
//     console.log(data)
//     return new Promise((resolve,reject)=>{
//         return resolve("so jao")
//     })
// })

// p5.then((data)=>{
//     console.log(data)
// })

//async await 

//koi aisa function jisme aap async code likhenge, kyoki async code hai to aap 
//promise ka istemal kar skte hai, jab uska answer aayega tab aapko lgana pdega.
// uss then ko lgane se bachne ke liye aap async await ka istemal kar skte hai 


// async function abcd(){
//     let raw = await fetch("https://randomuser.me/api/");
//     let data = await raw.json();
//     console.log(data);
// }

// abcd()


//jab bhi koi code async hai to aapko uske liye wait krna pdta hain, kyuki hme nhi pta ki uska answer kab aayega.aapko

// 5 use cases of real world
// node me jab db
// fetch api
// settimeout
// setinterval

// console.log("hey")
// try{
//     console.log(hey)
// }
// catch(err){
//     console.log(err)
// }
// console.log("hey")