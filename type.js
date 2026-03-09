const hero=(name)=>console.log(`favourite hero ${name} like`);
hero("rajini");
var gandhiji="father of nation";
console.log(gandhiji);
/*function starbucks(){
    console.log("waiter");
    user()
}
starbucks();
function user(){
    console.log("customer")
}
const water =setInterval(()=>{
    console.log("thanni kudi");
},5000);
setTimeout(()=>clearInterval(water),15000

);*/
let singam = {
    hero:"surya",
    heroine:"anushka",
    comedian:"vivek",
    villain:"pirakashraj",
    year :2010
};
console.log(singam);
console.log(singam.year);
console.log(Object.keys(singam));

let price =[100,500,1000,695,1250,850,160];
let filteredprice=price.filter(cost=>cost<=500);
console.log(filteredprice);
let tv={
    brandname:"sony",
    size:"72inch"
};
let convertedstring=JSON.stringify(tv);

console.log(convertedstring);

