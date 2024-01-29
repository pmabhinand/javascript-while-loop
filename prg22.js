//w a p to display numbers whose exponential is in the range of 8 to 36
//user can input the power to find the exponential for a particular number

//power =2                power =3

//1 4 9 16 25 36 49      //1 8 27 64 125
//  3 4 5 6              //2 3

power=4
i=1

while(i<=36){
    if(8<=i**power && i**power<=36){
        console.log(i);
    }
    i++
}

//break : to forcefully exit from a loop