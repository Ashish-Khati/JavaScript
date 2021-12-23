// 1. str.length()
// 2.str.substr(end,length)
// 3.str.substring(start,end)
// 4.str.replace(old,new)
// 5.str.concat(str2)
// 6.str.slice(-start,-end)
// 7.str.toUpperCase()
// 8.str.toLowerCase()
// 9.str.trim()                 it will remove whitespace from both side...
// 10.str.padStart(4,0)
// 11.str.padEnd(4,9)
// 12.str.charAt(2)=======str[2]
// 13.str.charCodeAt(0)==========it will return ascii code of character of given index
// 14.str.indexOf('jumps')
// 15.str.lastIndexOf('fox')        both will return -1 if given word not found
// 16.str.includes(jumps)
// 17.str.startsWith('the')
// 18.str.endsWith('dog')




let answer='Ashish Khati'

document.write(answer.length);

let a='The quick brown fox jumps over the lazy dog.'
b=a.substr(4,16)            //it again count from position 4 start from 0 to 16.
// substr(start,length)
document.write('<br>')
document.write(b)

b=a.substring(4,16)         //it cannot accept negative indexes.it will continue counting 
// substring(start,end)
document.write('<br>')
document.write(b);


b=a.slice(0,10)          //it can accept negative indexes.it will ignore the last position(9).will print string from 0 to 8
document.write('<br>')
document.write(b);


b=a.replace('jumps','JUMPS');
document.write('<br>')
document.write(b);



b=a.replace('quick','jumps')
document.write('<br>')
document.write(b)
c=b.replace('jumps','JUMPS')
document.write('<br>')
document.write(c)



c=c.toUpperCase(c);
document.write('<br>')
document.write(c)



c=c.toLowerCase(c);
document.write('<br>')
document.write(c)



document.write('<br>')
document.write(c+b)





aa='          Hello World         ';
bb=aa.trim();
document.write('<br>')
document.write(bb);






let txt='5'
txxt=txt.padStart(7,0)
document.write('<br>')
document.write(txxt);

txtx=txt.padEnd(4,2)
document.write('<br>')
document.write(txtx);





let ask='this is a location where location is location'
document.write('<br>')
document.write(ask.indexOf('location'))


document.write('<br>')
document.write(ask.indexOf('location',33))


document.write('<br>')
document.write(ask.lastIndexOf('location',17))


document.write('<br>')
document.write(ask.search('location'))
