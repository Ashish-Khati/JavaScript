                            //NEW Keyword      it is the replacement of Object.create() method. NEW keyword create a object==> this and return this. 
function Student(name,branch,address,mark,hobby)
{
    //const s=Object.create(Student.prototype);
    // const s={};
    this.Name=name;
    this.Branch=branch;
    this.Address=address;
    this.mark=mark;
    this.hobby=hobby;
    // s.about=Student.prototype.about;
    // s.marks=methodObj.marks;
    // s.hobbies=methodObj.hobbies;
    
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
                              

const result= new Student('Ashish Khati','CSE','Rishikesh',100,['playing cricket','coding','cooking','listening to music']);
result.hobbies(result.hobby);
console.log(result)
console.log(Student.prototype.marks(result.mark));
result.about();
result.hobbies(result.hobby);

             