let college={
    Name:'GB Pant institute of engineering and technology',
    Subject: ['Hindi','English','Maths','Science']
}
let student={
    Name:'Ashish Khati',
    Branch:'CSE',
    Year:'2nd',
    Semester:'3rd',
    details: function()
    {   
        console.log('My name is '+ this.Name +". I am a student of "+this.Branch +". Name of my college is: "+college.Name);

    }
}
console.log(student.details());

let x=this;
console.log(x);