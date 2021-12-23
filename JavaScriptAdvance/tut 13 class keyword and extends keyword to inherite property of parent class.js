class Animal{
    constructor(name,country,owner)
    {
        this.name=name;
        this.country=country;
        this.owner=owner;

    }
    about(){
        console.log(`Animal is ${this.name}\nCountry is: ${this.country} \n Owner is: ${this.owner}`);
    }
    eat(food){
        console.log(`${this.name} eats ${food}`);
    }
    ownerDetail(){
        console.log(`${this.owner} is the owner of ${this.name}. He is from ${this.country}`);
    }
}



                //extends keyword=====> used to inherite property from parent class

class Dog extends Animal{

}
class Cat extends Animal{

    sound(sound){
        console.log(`${this.name} ${sound}`)
    }
}




const dog=new Dog('Tommy','India','Ashish Khati');
console.log(dog);
dog.about();
dog.eat("Dog food");
dog.ownerDetail();


const cat=new Cat('Kitty','India','Subhika Khati');
console.log(cat);
cat.about();
cat.eat("Milk");
cat.ownerDetail();
cat.sound('Meow');