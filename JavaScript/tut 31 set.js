const num=new Set([1,9,8,6,5]);
 num.add(88)
 num.add(['item1','item2']);
 num.add({1:'ashish',2:'ayush',3:'subhika',4:'anirudh'});
console.log(num);
for(var n of num)
{
    console.log(n);
}