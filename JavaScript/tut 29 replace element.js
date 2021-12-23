let parent=document.getElementById("clone");
let newNode=document.createElement("li");
newNode.textContent="This is Ashish";
let replace=parent.firstElementChild.nextElementSibling.nextElementSibling;
console.log(replace);
parent.replaceChild(newNode,replace);
