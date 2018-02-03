/// we are going to start with a single word and if it starts with a vowlel add 'way'


function pigLatin (string) {
  var str = string
  var reg = /^[a,e,i,o,u]/
  if (reg.test(str) == true) {
    console.log(str + "way")
  }
  //the above if uses regular expressions to screen an input string for vowles, if it finds one in the first position it will print the string with "way"
  else {
    //split the string into an array
    var array = str.split("")
    //run a loop for each element in the array and screen each element for a vowel
    array.forEach(function(element){
      if (array[element] !== "a" || "e" || "i" || "o" || "u"){
        console.log(array[element])
      }
    })
  }
}



// screen an array of letters for a consonant and return the position of the first vowlel

// look at the javascript splice method on arrays check if ** does thing exist in array
function screenVowels(){
  var array = ["c", "c", "o", "u", "n", "t", "r", "y"]
  var vowles = ["a", "e", "i", "o", "u"]
for (var i = 0; i < array.length; i++) {
  if (vowles.includes(array[i]) === false ) {
    array.push(array.shift(array[i]))
    console.log(array)
  } else {
    console.log(array.join("") + "ay")
  }
}
}

//after figuring out more about the 'substing' method

function pigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"]
  if(vowels.includes(str[0]) == true) {
    str = str + "w"
  }
  while(vowels.includes(str[0]) == false) {
    str = str.substr(1) + str.charAt(0)
  }
  return str = str + "ay"
}

//a different iteration that didn't work
var vowles = "aeiou"
function pigLatin (str){
  if (vowles.includes(str.charAt(0)) === true) {
    str += 'w'
    console.log(str)
  }
  while (vowles.includes(str.charAt(0) == false) {
    str = str.substring(0,1) + str.charAt(0)
  }
  return str + "ay"
}
