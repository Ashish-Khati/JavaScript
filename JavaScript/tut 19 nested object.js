// function Student(first,last,branch,age){
// this.firstName=first;
// this.lastName=last;
// this.branch=branch;
// this.age=age;
// }
// Student.prototype.Address='Tehri Garhwal';
// var student1=new Student('Ashish','Khati','CSE','21');
// console.log(student1);
// const student2=new Student('Ayush','Khati','IT','16');
// student2.nationality='Indian';
// console.log(student2.Address);





                    // Nested Object

let user={
    id:101,
    email:'khatiashish2442@gmail.com',
    personalInfo:{
        name:'Ashish Khati',
        address:{
            street:'djkkalj',
            state:'Uttarakhand',
            country:'India'
        }
    }
}
console.log(user.personalInfo.address);


