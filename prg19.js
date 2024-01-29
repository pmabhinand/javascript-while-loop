//w a p to find the reverse of a number

num =123
rem=0
rev=0
while(num>0){
    rem=num%10
    rev=rev*10 +rem
    num=parseInt(num/10)
}
console.log('reverse of the given number is',rev );


