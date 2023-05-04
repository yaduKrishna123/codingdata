const a1=[1,5,4,6,3]
const a2=[1,5,6]
const a3=[5,1]
let d=new Set()

for(i=0;i<a1.length;i++){
if(a2.includes(a1[i]) && a3.includes(a1[i])){
    d.add(a1[i])

}
}
console.log(d);
