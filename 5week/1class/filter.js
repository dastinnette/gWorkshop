// Take this array and return an array of only the animals who use 3 letters.
var animals = ["cat", "zebra", "lamb", "cow", "elephant", "dog", "pterodactyl"];

function filter(array){
  var newArray = [];

  for(var i = 0; i < array.length; i++){
    if(array[i].length === 3){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

document.getElementById("original").innerHTML = animals;
document.getElementById("new").innerHTML = filter(animals);





















//


// function threeLetters(value){
//   return value.length === 3;
// }
//
// var animals = ["cat", "zebra", "lamb", "cow", "elephant", "dog", "pterodactyl"].filter(threeLetters)


//


// Given the array of numbers below, use accumulator functions to return a new array that results from doubling the odd numbers and throwing out the even ones

// var numbers = [1, 2, 3, 4];
// var newNumbers = [];

// console.log("The doubled numbers are", newNumbers);
