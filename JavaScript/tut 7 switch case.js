let a=4
switch(a)
{
    case 1:
    case 2:
    case 3:
    case 4:{
        document.write("Numbers");
        break;
    }
    case 'a':
    case 'e':
    case'i':
    case'o':
    case 'u':
        {
            document.writeln('Vowels....!!!');
            break;
        }
     default:{
         document.writeln('Wrong input');

     }   
}