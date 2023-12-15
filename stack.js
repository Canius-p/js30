"user strict"
var letters = []
var word = "papa"
var rwords = ""

for (var i = 0; i < word.length; i++) {
  letters.push(word[i])
}
for (var i = 0; i < word.length; i++) {
  rwords += letters.pop()
}

if (rwords === word) {
  console.log(word + " is a palindarome")
} else {
  console.log("nah")
}
