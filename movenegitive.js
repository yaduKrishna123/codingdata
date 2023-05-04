const a=[2,5,77,-66,9,-9,4-1,-2,6]

for(let i=0;i<a.length-1;i++){
    for(let j=0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            const temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp
        }
    }
}
console.log(a);