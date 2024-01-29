//input=2  -- output=24   --2*12 --2+22
//input=3  -- output=369  --3*123 --3+33+333
//input=4  -- output=4936 --4*1234 --4+44+444+4444
//input=5  -- output=61725  --5*12345 --5+55+555+5555+55555

//2 nd pattern
input=3
str=''
i=1
sum=0
while(i<=input){
    str=str+input
    sum=sum+ Number(str)
    i++
}

console.log(sum);

//1st pattern

inp=3
j=1
str=''
while (j<=inp) {
    str= str + j
    j++
    pro= inp*Number(str)
}
console.log(pro);

