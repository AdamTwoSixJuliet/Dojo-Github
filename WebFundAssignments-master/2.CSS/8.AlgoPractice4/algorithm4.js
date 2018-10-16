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
    arr = arr.map(function(i){
      if (i<0){
        return 'Dojo';
      } else {
        return i;
      }
    });
    return arr;
  }
y = returnNoNeg([-5,12,-8,20]);
console.log(y);

// Challenge 4.
function returnRange(arr) {
  var arr = [];
  for(i=0;i<arr.length,i++;) {
    if(arr[i]<30) {
      arr.length--;
    } else {
    if(arr[i]>60) {
      arr.length--;
      } else {
        arr.push(i);
      }
    }
  }
  console.log(arr);
}
returnRange([10,20,30,40,50,60,70,80,90]);