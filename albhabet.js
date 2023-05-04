const prompt=require('prompt-sync')('')

const data=prompt('enter the word to sort Alphatical order')
const d=data.split('')
console.log(d.sort());