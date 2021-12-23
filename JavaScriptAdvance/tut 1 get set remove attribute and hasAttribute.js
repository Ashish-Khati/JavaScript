let btn=document.getElementById("btn");
btn.className='Ashish';
btn.setAttribute('name','form1');
let value=btn.getAttribute('id');
document.write(btn.innerHTML);
console.log(value)
console.log(btn);
console.log(btn.hasAttribute('class'));
btn.removeAttribute('class')
console.log(btn.hasAttribute('class'));
