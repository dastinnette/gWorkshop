// Convert fahrenheit temps to celsius.

var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// function celsius(array){
//   var converted = [];
//
//   for(i=0; i<array.length; i++){
//     converted.push(Math.round((array[i] - 32) * 5 / 9));
//   }
//   return converted;
// }

// var celcius = fahrenheit.map(function(elem) {
//     return Math.round((elem - 32) * 5 / 9);
// });

document.getElementById("celsius").innerHTML = fahrenheit;
document.getElementById("celsius").innerHTML = celsius(fahrenheit);
