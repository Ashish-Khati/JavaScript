// let e=document.getElementById('intro');
// let c=e.firstElementChild;
// c.innerHTML='Hello Ashish';
// let l=e.lastElementChild;
// l.innerHTML="Bye Ashish";
// // console.log(c,l);
// let a=e.children;
// for(let i=0;i<a.length;i++)
// {
//     a[i].innerHTML='Ayush Khati';
// }

// console.log(e,c,l,a);





let ele=document.getElementById("intro");
let ps=ele.previousElementSibling;
let ns=ele.nextElementSibling;
console.log(ele.innerHTML='Middle Brother');
console.log(ps.innerHTML='Elder Brother');
console.log(ns.innerHTML='Younger Brother');