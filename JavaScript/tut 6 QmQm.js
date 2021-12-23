let isloggedin=1;
let user=null;
let option=isloggedin==1?'Logout':'Login';
alert(user?? 'Guest user'+" is logged in")
document.write(user?? 'Guest user'+" is logged in")             //  ?? used to define null and undefined variable.

document.write(option);
