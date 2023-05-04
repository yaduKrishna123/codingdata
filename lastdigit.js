const prompt=require('prompt-sync')('')

const num=prompt('Enter the first number')
const num1=prompt('enter the second number')


const Nnum=(+num)
const Nnum1=(+num1)
let last=Nnum%10
let slast=Nnum1%10
if(last==slast){
    console.log("Two numbers have Same Last Number");
}
else{
    console.log("Numbers does not having the same number");
}
