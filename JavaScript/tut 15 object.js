            // Object

let person={
    firstName:'Ashish',
    lastName:'Khati',
    Age:21,
    Nationality:'Indian'
}
person.Age=22;
console.log(person['firstName']);
console.log(person.lastName);
console.log(person)
delete person.Nationality;
console.log(person);


console.log('Height' in person);
console.log('Age' in person);


for(let key in person)
{
    console.log(key +":"+person[key]);
}





                // Method creation process and different techniques
         
let student={
    Name:'Ashish',
    Branch:'CSE',
    RollNo:212201,
    sayHello:function(){
        console.log("Hello Ashish !!");         //Method 3
    },
    sayBye(){
        console.log("Bye Ashish see you again");            //Method 4
    }

}                


                // Method 1    

student.college= function(){
    return 'GBPEC';
}

console.log(student.college());


                // Method 2

function start(){
    console.log("College Start!!!");
}

student.start=start;
student.start();
student.sayHello();
student.sayBye();

