let movies = ["kathi","baasha","killi","vikram"];
console.log(movies.includes("baasha"));
console.log(movies.push("master"));
movies.unshift("veeram");
console.log(movies);
//object
let restaurant={};
restaurant.name="thala";
console.log(restaurant.name);
let movie = new Object();
movie.name="don";
console.log(movie.name);

let product = {
    brand :"iphone",
model:"16proMax",
price:15000,
spec:{
    variant :"512gb",
    colour:"Iceblue"
}
};
console.log(product.brand);
console.log(product.spec.colour);
//map filter & reduce explained
let numbers=[10,20,30,40,50];
//method1
function multiply(num){
    return num*2;
}
//method2
let double = numbers.map(multiply);
console.log(double);
//mehod3
let double1=numbers.map(function(num){
    return num**2;
});
console.log(double1)
//method4
let double2=numbers.map(num=>num*5);
console.log(double2);
console.log("jemini");
