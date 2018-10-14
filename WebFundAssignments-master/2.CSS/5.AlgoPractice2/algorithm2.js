// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.

// Challenge Print 1 to x.
function printUpTo(x){
    for(i=0;i<1000001; i++){
        console.log(i);
    }
    if(x<0)
    console.log("negative number")
}
printUpTo(1000000); // should print all the integers from 1 to 1000000
y = printUpTo(-10); // should return false
console.log(y); // should print false

// Challenge PrintSum.
function printSum(x){
    var sum = 0;
    for(var i=0; i<=x; i++){
        sum+=i;
        console.log(i,sum);
    }
    return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640

//Challenge PrintSumArray.
function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i]
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6

//Challenge ReturnLargestElement.
function printLargestElement(arr){
var array =[4,7,1,9,2];
var maxvalue = array[0]; 
    for (var i = 0; i < array.length; i++) {
        if(array[i]>=maxvalue)
        {
            maxvalue = array[i];
        }
    }
}
console.log(maxvalue);