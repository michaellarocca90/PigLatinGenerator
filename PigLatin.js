//Input phrase

var phrase = "The animal on the street goes quack you"

//Split phrase into an array of words

var words = phrase.split('')
console.log(words)


var pigLatin = ''
var regex = /[aeiou]/gi
if (phrase[0].match(regex)){
  pigLatin = name + "way"
} else {
  console.log(false)
}



// for(i=0; i < words.length; i++) {
//   i.parseInt(words[i]);
// }

//splitting words into letters
function wordVars (){
  if (str[0].match(regex)) {
     = str + 'way'
  } else {
    var
  }
}
wordVars()
console.log()

function pigLatin(str) {
  return str
  .replace(/^([aeiou])(.*)/, '$1$2way')
  .replace(/^([^aeiou]+)(.*)/, '$1$2ay')
} pigLatin("This is Hard")
