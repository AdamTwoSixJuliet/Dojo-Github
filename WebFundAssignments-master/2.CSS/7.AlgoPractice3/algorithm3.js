// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.

// Challenge 1.
function printAverage(x){
    var sum=0;
        for (var i = 0; i < x.length; i++) {
            sum += x[i];
        }
        return sum/x.length
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
   
y = printAverage([2,5,8]);
console.log(y); // should log 5

 // Challenge 2.
function returnOddArray(){
    var arr = [];
    var i = 1;
    while(i<=255) {
        if(i%2===1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
y = returnOddArray(255);
console.log(y); // should log [1,3,5,...,253,255]

// Challenge 3.
function squareValue(x){
    var arr = [];
        for(i=0; i<x.length; i++) {
            arr.push(x[i]*x[i]);
        }
    return arr;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]