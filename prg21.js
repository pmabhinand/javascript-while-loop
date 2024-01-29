//w a p to check a three digit number is armstrong or not
//153=1**3 + 5**3 +3**3 =1 +125 + 27 =153


num=372
temp=num
rem=0
sum=0
while(num>0){
    rem= num%10
    sum= sum+rem**3
    num= parseInt(num/10)
}

if(temp==sum){
    console.log('armstrong');
}
else{
    console.log('not armstrong');
}
