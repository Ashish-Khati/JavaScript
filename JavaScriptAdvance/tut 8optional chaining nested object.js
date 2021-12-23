const a={
    firstName:'Ashish',
    lastName:'Khati',
    age:21,
  // address:{houseNo:05,street:'Chauda Bigha'}
};
console.log(a.firstName);               //ashish
console.log(a.address);                  //if address is not defined it will return notdefined
// console.log(a.address.houseNo);          //if address is not defined it will genrate error if address key is commemted else return 05.
console.log(a?.address?.houseNo);  
