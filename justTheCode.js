
function imgBuilder() {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var storageArray = [];
  for (var i = 0; i <= alphabet.length; i++) {
    var randomNumber = Math.floor(Math.random() * (alphabet.length - 1) + 1);
    var randomCharacter = alphabet[randomNumber];
    var randomMaxTen = Math.floor(Math.random() * (10 - 1) + 1);
    storageArray.push(randomCharacter.repeat(randomMaxTen));
  }
  return storageArray.join("");
}
var builtImg = imgBuilder();
function compress(src) {
  var arr = [];
  var count = 0;
  var lastChar = "";
  for (var i = 0; i <= src.length; i++) {
    var currentChar = src[i];
    if (lastChar === "") {
      lastChar = currentChar;
    }
    if (currentChar === lastChar) {
      count++;
    } else {
      arr.push(lastChar + count);
      lastChar = currentChar;
      count = 1;
    }
  }
  var compressedString = arr.join("");
  return compressedString;
};
var compressionResult = compress(builtImg);
var percentageCompressed = (inputLength, outputLength) => {
  var difference = inputLength - outputLength;
  var average = difference / inputLength;
  var result = (average * 100).toPrecision(4);
  return result;
};
var percentCompressed = percentageCompressed(builtImg.length, compressionResult.length);
console.log("Your imgBuilder function made This data: " + builtImg);
console.log("Your compression function compressed it into this: " + compressionResult);
console.log("Number of characters in Uncompressed data: " + builtImg.length);
console.log("Number of characters in Compressed data: " + compressionResult.length);
console.log("You compressed your data by : " + percentCompressed + "% !!");
console.log("Congratulations you have just learned some of the basics of programming!");
console.log("What are you going to make next? :)");
