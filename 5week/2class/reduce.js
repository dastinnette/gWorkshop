// Sum up all orbital rocket launches in 2014.

var rockets = [
    { nation:'Russia', launches:32 },
    { nation:'US', launches:23 },
    { nation:'China', launches:16 },
    { nation:'Europe(ESA)', launches:7 },
    { nation:'India', launches:4 },
    { nation:'Japan', launches:3 }
];

function rocketLaunches(array){
  var sum = 0;

  for(i=0; i<array.length; i++){
    sum += array[i].launches;
  }
  return sum;
}

var sum = rockets.reduce(function(count, index) {
    return count + index.launches;
}, 0);

document.getElementById("sum").innerHTML = insertFunctionTypeHere;
