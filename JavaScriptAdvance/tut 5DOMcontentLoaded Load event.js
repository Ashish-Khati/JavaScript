let img=document.getElementById("imgs");
let b=document.getElementById("imgs");
window.addEventListener("DOMContentLoaded",function()
{
    console.log("DOM tree created");
});
window.addEventListener("load",function(){
    console.log("Fully loaded");
});

window.addEventListener("load",function(){
    alert("div loaded");
    console.log("div loaded")
});