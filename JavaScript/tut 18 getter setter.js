
                // getter and setter 

 
let person={
    name:'Ashish Khati',
    branch:'CSE',
    college:'Government Polytechnic Dehradun',
    get getname(){
            console.log(this.name.toUpperCase());
    },
    set setname(n)
    {
        console.log(n.toUpperCase());
    }
}
person.setname='subhika khati';