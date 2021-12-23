            // normal function
function add(a,b)
{
    console.log(`sum is: ${a+b}`);
}
add(10,40);


            // anonymous function  & function expression

let multi=function(a,b){
    console.log(`Multiplication is ${a*b}`);
}
multi(10,60);

let a=function(a,b,c){
    d=a+b+c;
    return d;
}
console.log(a(10,20,30));



    //  argument Object

let sum=function sum()
{
    let sum=0;
    if(arguments.length==0)
    {
        console.log("No argument passed by user");
    }
    else{
        for(let i=0;i<arguments.length;i++)
        {
            sum=sum+arguments[i];
        }
    }
    return sum;

}
console.log(`sum is ${sum(10,20,30,40,50)}`);



            // self invoked function

let diff=(function(a,b,c,d){
        e=a-b-c-d;
        return e;
});
console.log(diff(100,50,25,12));






            //callback function             calling function in function


            function a()
            {
               console.log("this is function a");
            }
            
            function b(obj)
            {
                obj();
                console.log("this is function b");
                obj();
            }
            
            let person={
                name:"Ashish Khati",
                age:22
            };
            b(a);









             //ForEach loop in Array

const array=[13,'Ashish Khati','Ayush Khati',23,76,'Subhika Khati','Anirudh Khati'];
const num=[1,2,3,4,5];
function fun(value,index){
    isNumber=typeof value
    if(typeof value=='number')
    {
            console.log(`index:${index} and value: ${value*2}`);
    }
    else{
        console.log(`index:${index} and value: ${value.toUpperCase()}`);
    }
    

}


num.forEach(fun);








                    //Map method in Array

                    const array=[13,'Ashish Khati','Ayush Khati',23,76,'Subhika Khati','Anirudh Khati'];
                    const num=[1,2,3,4,5];
                     function fun(value,index)
                     {
                        if(typeof value=='number')
                        {
                            return value*100;
                        }  
                        else{
                            return value.toUpperCase();
                        }
                     }
                    
                     const newArray=array.map(fun);
                     console.log(array);
                     console.log(newArray);


        //Filter method in array

        const num=[10,20,30,60,120,240];
        const isEven=function(number){
            return number%2==0;
        }
        const result=num.filter(isEven);
        console.log(result);



        
        
        
                    //Reduce method in array
        
        const sum=num.reduce((x,y)=>{return x+y},100);
        console.log(sum);
        
        



        
        
                        // sort method in array
        
        
        const a=[0,1,24,7,98,66,45,9,11,76];
        b=a.sort((a,b)=> a-b);
        console.log(b);
        
        
        
        



        
                        // find method in array
        
        const bb=[1,666,34,12,74];
        const c=bb.find((num)=> num===12);
        console.log(c);
        