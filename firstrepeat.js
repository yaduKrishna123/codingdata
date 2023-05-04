a=[3,4,5,6,3,6]
let f=[]
for(i=0;i<a.length;i++){
    if(a.indexOf(a[i])!==i){
        f.push(a[i])

    }
}

console.log(`first repeating Element is ${a[0]}`);
