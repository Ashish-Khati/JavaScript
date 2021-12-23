outer:for(let i=1;i<10;i++)
{
    document.write(`i=${i}`);
    document.write('<br>');
    for(let j=1;j<5;j++)
    {
        if(i==3)
        {
            break outer;
        }
        document.write('Ashish');
        document.write('<br>');
    }
}