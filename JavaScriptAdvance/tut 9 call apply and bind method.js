                        // call method 
            

function marks(marks){
    console.log(`Marks obtained ${marks}`);
}

const user1={
    firstname:'Ashish ',
    lastname:'Khati',
    age : 21,
    about:function( college,branch){
        console.log(`My name is ${this.firstname} ${this.lastname}. I am ${this.age} years old. I am pursuing b.tech from ${college} in ${branch}`)
    }
}


const user2={
    firstname:'Subhika ',
    lastname:'Khati',
    age : 20,
  
}
user1.about;
user1.about.call(user2,'gpd','cse');
marks.call(user1,200)
marks.call(user1,400)


                    //Apply method is same as call method but only function argument pass as array....

user1.about.apply(user1,['gbpec','IT']);




                        //bind method it return function which we can use anytime


const fun=user1.about.bind(user1,'GIC','Mech');
fun();



                    //small errors which should be avoid


const f=user1.about;                //here the function's reference is storing in f variable not values.here this keyword refer to window...
f();                                //it will return undefined
const f=user1.about.bind(user1)         //now it is also storing values of user1 object in functon.here this keyword will refer firstname,lastname and age