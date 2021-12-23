var a=100;
console.log(a);
let aa=200
console.log(aa)
const abc;              //it will give error because value should be initialize in const variable.
const b=2000            //after initializing value to const we cannot change its value after this.
console.log(b)




name='Ashish';
var name='Ayush';           //Global scope
console.log(name);
console.log(name)           //Ayush
{
    var name='Subhika';     //block scope
                            //Subhika
}
console.log(name);          //subhika




// age=10;
// console.log(age)
let age=20
age=10
console.log(age)            //10
{
    let age=30
    console.log(age)        //it will print 30 
 }
 console.log(age)           //it will print 10 as let keyword don't affect value from block scope.






 let name="Ashish"

 console.log(`Hello ${name}`)               //template