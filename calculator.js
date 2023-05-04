

console.log(`enter two numbers to perform oprations`)

const prompt=require('prompt-sync')()



const num1=prompt("Enter the firs number")
const num2=prompt("enter the second number")
console.log(`1. Addition \n 2. substraction \n 3. multilication  \n 4. division`);
const key=prompt("enter the key to perform operations")


// if(key==1){
//     const sum=(+num1+(+num2))
//     console.log(sum);

// }
// else if(key==2){
//     sum=(+num1 - (+num2))
//     console.log(sum);
// }
// else if(key==3){
//     sum=(+num1 * (+num2))
//     console.log(sum);
    
// }
// else if(key==4){
//     sum=(+num1 / (+num2))
//     console.log(sum);
// }
let sum;
switch(key){
    case "1":
        key==1
          sum=(+num1+(+num2))
        console.log(sum);
        break;
    case "2":
            key==2
            sum=(+num1-(+num2))
            console.log(sum);
            break;
    case "3":
                key==4
                sum=(+num1*(+num2))
                console.log(sum);
                break;
    case "4":
        key==4
        sum=(+num1 /(+num2))
        console.log(sum);
        break

            
            

}
