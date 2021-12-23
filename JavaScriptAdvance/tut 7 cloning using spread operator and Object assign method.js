                // spread(...[]) operator used to clone array and objects
const obj=['item 1','item 2','item 3'];
const obj1=[...obj];                    
obj.push('item 4','item 5');
console.log(obj);
console.log(obj1);


                //spread(...{}) operator to clone objects

// const arr={1:'Ashish',2:'Ayush',3:'Subhika'};
// const arr1={...arr};
// arr['4']='Anirudh';
// console.log(arr);
// console.log(arr1);



                    //clone object using Object assign method

 const arr={1:'Ashish',2:'Ayush',3:'Subhika'};
 const a={4:'Ani',5:"Ajay"}
const arr1=Object.assign(arr,a);
 arr['4']='Anirudh';
 console.log(arr);
 console.log(a)
 console.log(arr1);
               
                        