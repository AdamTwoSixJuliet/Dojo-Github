// Challenge 1.
// Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function returnNoNeg(arr) {
  for(var i=0;i<arr.length;i++) {
      if(arr[i] < 0) {
          arr[i] = 0;
      }
  }
  return arr;
}
y = returnNoNeg([-6,19,-12,25]);
console.log(y);

// Challenge 2.
// Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].

var arr = [10,20,30,40,50];
console.log(arr.shift());
arr.push(0);
console.log(arr);

// Challenge 3.
// Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].

function reverse(arr) {
  var arr = [2,4,6,8,10,12,14];
  var first = 0;
  var last = arr.length - 1;

  while (first < last) {
    var x = arr[first];
    arr[first] = arr[last];
    arr[last] = x;

    first++;
    last--;
  }
return arr;
}
console.log(reverse(arr));

// Challenge 4.
// Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function seeingDouble(arr) {
  var arr = ["Coding", 4, "Dojo", 8, "rocks!", 12]
  arr.splice(1,0,"Coding");
  arr.splice(3,0,4);
  arr.splice(5,0,"Dojo");
  arr.splice(7,0,8);
  arr.splice(9,0,"rocks!");
  arr.splice(11,0,12);
  return arr;
}
console.log(seeingDouble(arr));