// takes in a number, and an object/hash of divisibles and their corresponding words
// example wordNumList
// inspired by ruby solution using terniary operators:http://stackoverflow.com/questions/225045/fizzbuzz-using-ternary-conditional-operator
// help on how to loop thru js object: http://stackoverflow.com/questions/921789/how-to-loop-through-javascript-object-literal-with-objects-as-members
var wordNumList = {
  fizz: 3,
  buzz: 5,
  sivv: 7
};


var Fizzbuzz = function(num, wordNumList) {
  //establish a blank var message for each word
  msg = '';
  //iterate through the word/divisor list grabbing the key and value
  for (var word in wordNumList) {
    if (num % wordNumList[word] === 0) {
    //if the num is divisible by the value/word, append the value to the message
      msg += word;
    }
  }
  console.log(msg);


};

Fizzbuzz(105, wordNumList);
Fizzbuzz(100, wordNumList);
Fizzbuzz(25, wordNumList);
Fizzbuzz(2, wordNumList);
