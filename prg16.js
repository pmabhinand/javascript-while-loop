//w a p to print sum of all numbers from 1 to 10
i=1
sum=0
while(i<=10){
    sum=sum+i
    i++
}
console.log(sum);


// w a p to print 'fizz' if the number is divisible by 3 using if else
//'buzz' if the number is divisible by 5
//'fizzbuzz' if the number is divisible by 7

i=28
if(i%3==0){
    console.log('fizz');
}
    else if(i%5==0){
        console.log('buzz');
      }
     else if(i%7==0){
        console.log('fizzbuzz');
     } 
 else{
    console.log('not divisible');
 }    
