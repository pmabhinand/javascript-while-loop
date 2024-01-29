//w a p to check the given number is palindrome or not

num=11211
temp=num
rev=0

while(num>0){
    rem=num%10
    rev=rev*10 +rem
    num=parseInt(num/10)
}
if(temp==rev){
    console.log('number is palindrome');
}
else{
    console.log('number is not palindrome');
}