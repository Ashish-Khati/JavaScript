
let user=prompt("Enter your name:");
if(user==null)
{
    alert('Hello user!! Welcome to this site');
}
else{
    alert(`Hello ${user} !! Welcome to this site`);
}

let name=user;
let resp=confirm("Do you want to delete?");
if(resp)
{
    document.write('Name deleted successfully!!');
}
else{
    document.write(`Name is ${user}`??'It is guest user');
}
