const arr = [4, 3, 21, 20, 10];

for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            const temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            
        }
    }
}
console.log(arr);
let last=arr.length-1

console.log(`min element is = ${arr[0]} and max element is = ${arr[last]}`);