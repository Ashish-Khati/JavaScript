let div1=document.getElementById('d');
let a=div1.getElementsByTagName('h2');

for(let i=0;i<a.length;i++)
{
    console.log(a[i].innerHTML);
    a[i].innerHTML='Ashish Khati';
    console.log(a[i].innerHTML);
}