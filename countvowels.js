const prompt=require('prompt-sync')('')

const s=prompt('enter the text ')
const v='aeiou'
let count=0

for(i=0;i<s.length;i++){
    if(v.indexOf(s[i])!==-1){
        count+=1
    }

  
}
console.log(`The viowels string count is ${count}`);
