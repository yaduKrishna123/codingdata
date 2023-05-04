const a=[2,3,5,6,5,7,2,1,7,3]
let d=new Set()
for(let i=0;i<=a.length-1;i++){
    if(    a.indexOf(a[i])!==i){
        // console.log(a[i]);
         d.add(a[i])

    }

    
  
   
}
console.log(d);