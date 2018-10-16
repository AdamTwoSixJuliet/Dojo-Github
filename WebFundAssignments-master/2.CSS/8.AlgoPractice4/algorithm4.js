// Challenge 1.
function returnGreaterY(x) {
     return function(y, index, array)
     {
     return (y > x);
     }
   }
var z = [1,2,3,4,5,6,7]. filter(returnGreaterY(3));
console.log(z);

// Challenge 2.
function maxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for(var i=1;i<arr.length;i++) {
    sum += arr[i];
    if(arr[i]>max) {
      max = arr[i];
    } else if(arr[i]<min){
      min = arr[i];
    }
  }
  console.log("Max:",max,"Min:",min,"Average:",sum/arr.length);
}
maxMinAvg([10,20,30,40,50]);

// Challenge 3.
function returnNoNeg(arr) {
  var arr = [-5,12,-8,20];
  for(var i=0;i<x.length;i++) {
    if(i<0) {
      return 'Dojo';
    } else {
      return i;
    }
  }
y = returnNoNeg(-5,12,-8,20);
console.log(y);

// Challenge 4.
function returnRange(arr) {
  var arr = [10,20,30,40,50,60,70,80,90];
  for(i=0;i<)
}