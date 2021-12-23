let ee=document.getElementById("mouse");
let e=ee.firstElementChild;
// alert(e);
console.log(ee.innerHTML);

// ee.addEventListener("click", function()
// {

//     ee.style.backgroundColor="white";
//     ee.innerHTML="Hello welcome to javascript tutorial";
//     ee.style.color="yellow";
// });



// ee.addEventListener("contextmenu",function()
// {
//     ee.style.backgroundColor="lightgreen";
//     ee.innerHTML="<p>this is right click event</p>"
// });


ee.addEventListener("dblclick",function(){
    ee.style.width="200px";
    ee.style.height="200px";

});


// ee.addEventListener("mouseover",function(){
//     ee.style.width="200px";
//     ee.style.height="200px";
// ee.style.backgroundColor="orange";
// });
//     ee.addEventListener("mouseout",function(){
//         ee.style.width="100px";
//         ee.style.height="100px";
//         ee.style.backgroundColor='blue';
//     })

    ee.addEventListener("mousedown",function(){
        ee.style.width="500px";
    })


    ee.addEventListener("mouseup",function(){
        ee.style.width="800px";
    })