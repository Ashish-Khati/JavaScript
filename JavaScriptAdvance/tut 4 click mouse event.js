function btnClick(){
    console.log("Hello! welcome of Ashish universe")
}
function clk()
{
    console.log("second click event");
}


let btn=document.getElementById("btn");
btn.addEventListener('click',btnClick);
btn.addEventListener('click',clk);
btn.addEventListener('mouseover',function()
{
    console.log("Mouse hover activated");
});
btn.addEventListener('mouseout', function()
{
    console.log("Mouse out activated");
})



btn.removeEventListener('click',clk);





