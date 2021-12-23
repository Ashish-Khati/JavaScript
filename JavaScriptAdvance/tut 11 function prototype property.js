
function Student(name,branch,address,mark,hobby)
{
    const s=Object.create(Student.prototype);
    // const s={};
    s.Name=name;
    s.Branch=branch;
    s.Address=address;
    s.mark=mark;
    s.hobby=hobby;
    // s.about=Student.prototype.about;
    // s.marks=methodObj.marks;
    // s.hobbies=methodObj.hobbies;
    return s;
}
       // prototype property

       
       Student.prototype.about=function(){
                 console.log(`Student name is ${this.Name}  Branch is ${this.Branch}.  Address is ${this.Address}`);
                     };
                     Student.prototype.marks= function(marks){
                               return marks*10
                           };
                          Student.prototype.hobbies= function()
                               {
                                   const length=arguments.length;
                                   for(let i=0;i<length;i++)
                                   {
                                       console.log(arguments[i]);
                                   }
                               }    

const result=Student('Ashish Khati','CSE','Rishikesh',100,['playing cricket','coding','cooking','listening to music']);
console.log(result)
console.log(Student.prototype.marks(result.mark));
result.about();
result.hobbies(result.hobby);

             