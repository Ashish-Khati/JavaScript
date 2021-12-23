        // Problem 1 here we have to create individual object for every student which is not a good approach in computer science

                  
// const student1={
//     Name:'Ashish Khati',
//     Branch:"CSE",
//     Address:'Rishikesh',
//     about:function(){
//         console.log(`Student name is ${this.Name}  Branch is ${this.Branch}.  Address is ${this.Address}`);
        
//     }
// };

// const student2={
//     Name:'Ayush Khati',
//     Branch:"IT",
//     Address:'Dehradun',
//     about:function(){
//         console.log(`Student name is ${this.Name} \n Branch is ${this.Branch}. \n Address is ${this.Address}`);
//     }
// };

// console.log(student1);
// console.log(student2);
// student1.about();
// student2.about();











                        // solving problem 1 of creating multiple objects for multiple student.
   // here we will create a function which take input from user and then create a empty object and store user input inside that object and after that return object
   //but still there is problem with function inside function like about function here.


// const a=function(){
//     console.log("Hello Ashish");
// }

// function Student(name,branch,address)
// {
//     const s={};
//     s.Name=name;
//     s.Branch=branch;
//     s.Address=address;
//     s.about=function(){
//         console.log(`Student name is ${this.Name}  Branch is ${this.Branch}.  Address is ${this.Address}`);
        
//     };
//     return s;

// }
// const result=Student('Ashish','CSE','Rishikesh');
// console.log(result);
// result.about();



                











                                // Solving problem 2  removing  function which is inside the function in above
        //Here we will create a seprate object which store all the method used in a function. in the function which is storing object we will pass reference of the object which we create for method used here.

// const methodObj={
//     about:function(){
//         console.log(`Student name is ${this.Name}  Branch is ${this.Branch}.  Address is ${this.Address}`);
        
//     },
//     marks: function(marks){
//         return marks*10
//     },
//     hobbies:function()
//     {
//         const length=arguments.length;
//         for(let i=0;i<length;i++)
//         {
//             console.log(arguments[i]);
//         }
//     }
// }


// function Student(name,branch,address,mark,hobby)
// {
//     const s={};
//     s.Name=name;
//     s.Branch=branch;
//     s.Address=address;
//     s.mark=mark;
//     s.hobby=hobby;
//     s.about=methodObj.about;
//     s.marks=methodObj.marks;
//     s.hobbies=methodObj.hobbies;
//     return s;
// }

// const result=Student('Ashish Khati','CSE','Rishikesh',100,['playing cricket','coding','cooking','listening to music']);
// console.log(result);
// result.about();
// result.hobbies(result.hobby);
// console.log(`Marks scored ${result.marks(result.mark)}`);










                // solving problem generated from above code.(which is in above code we solve problem of methods by putting them in a seprate object and passed reference to the main function which is storing the object...but in above code we have to add all the reference of the method which we add in a seperate object which is a diffucult take.. here we will solve this problem using Object.create() method)    

const methodObj={
    about:function(){
        console.log(`Student name is ${this.Name}  Branch is ${this.Branch}.  Address is ${this.Address}`);
        
    },
    marks: function(marks){
        return marks*10
    },
    hobbies:function()
    {
        const length=arguments.length;
        for(let i=0;i<length;i++)
        {
            console.log(arguments[i]);
        }
    }
}


function Student(name,branch,address,mark,hobby)
{
    const s=Object.create(methodObj);
    // const s={};
    s.Name=name;
    s.Branch=branch;
    s.Address=address;
    s.mark=mark;
    s.hobby=hobby;
    s.about=methodObj.about;
    // s.marks=methodObj.marks;
    // s.hobbies=methodObj.hobbies;
    return s;
}

const result=Student('Ashish Khati','CSE','Rishikesh',100,['playing cricket','coding','cooking','listening to music']);
console.log(result);
result.about();
result.hobbies(result.hobby);
console.log(`Marks scored ${result.marks(result.mark)}`);
console.log(result.__proto__);          //about(),hobbies(),marks()




//          __proto__   [[prototype]] are same but prototype is different from these two..

