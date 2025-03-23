//functions basics

function PrintMsg(){
    console.log("Hello JS")
}

PrintMsg()

function sum(){
    return 5+6
}

console.log(sum())

function sub(a,b){
    return a-b
}
console.log(sub(5,3))



//write a boolean function to find a given number is prime

function isPrime(x){

    if(x < 2){
        return false
    }

    else{
        for(let i=2; i<x; i++){
            if(x%i == 0){
                return false
            }
        }
        return true

    }
    
}

console.log(isPrime(19))

// if(isPrime(1)){
//     console.log("It is Prime")
// }
// else{
//     console.log("It is not Prime")
// }


//write a recursive function to print numbers from 1-n

function recursivePrintNum(i,y){
    if(i == y+1){
        return 1
    }

    else{
        console.log(i)
        recursivePrintNum(i=i+1,y)
    }
}

console.log(recursivePrintNum(1,10))



//write a recursive function to print numbers from n-1(reverse)


function recursivePrintReverseNum(z){
    if(z==0){
        return 1
    }
    else{
        console.log(z)
        recursivePrintReverseNum(z-1)
    }
}
console.log(recursivePrintReverseNum(10))




//arrow function

/*function PrintMsg(){
    console.log.("Hello JS")
}
*/

const msg = ()=>{return console.log("Hey JS")}
//console.log(msg)
msg()

//write an arrow function to find the sum of two numbers
const add = (a,b) => {return a+b}
console.log(add(4,5))

const mul = (a,b=2) => {return a*b}
console.log(mul(4,5))
console.log(mul(4))

const mysum = (...n) => {
    console.log(n)
}

mysum(4,5,6,89,2)


const mysum1 = (...n) => {
    a = n
    let sum = 0 
    for(let i = 0; i<a.length; i=i+1){
        sum = sum + a[i]

    }
    console.log(sum)
}
mysum1(14,55,6,89,2)

//rest parameter
/*
const mysum = (...n)=>{
    console.log(n)
}
    
const mysum = (...n)=>{
    let t=0
    n.forEach((i)=>t=t+i)
    console.log(t)
    }
*/


const mysum3 = (...n) => {
    return n.reduce((t,i)=>t=t+i)
}
console.log(mysum3(4,5,6,8,2))

//callback function
//const myName = (name)=>{console.loh("My name is "+name)}
const greet = (msg,fun)=>{
    console.log("Hi.. " +msg)
    fun()
}
//const myName = (name)=>{console.log("My name is "+name)}

greet("Good Morning",()=>{console.log("My name is Nadun")})

const multtwo = (n)=>n*3
const myarr = (mul,...n)=>{
    n.forEach((i)=>console.log(mul(i)))
}
myarr(multtwo,4,5,6,8,2)