// WELCOME
// This is a draft of tutorial intended to teach absolute new comers to the basics of programing by creating a compression algorithm!

// Here you will learn:
// Variables, functions, arrays, for loops, methods, parameters

// This is the replication of a very old data compression algorithm called "Run Length Encoding"
// https://en.wikipedia.org/wiki/Run-length_encoding#:~:text=Run%2Dlength%20encoding%20(RLE),than%20as%20the%20original%20run

// In this example we will be creating a "Image" compression algorithm.
// The function COMPRESS will take the representation of a JPG in the form of a string EG: 'aaabbbuiuuddddd'
// it will count the number of times in a row a letter appears.
// It will then combine the letter, and number of times in a row it appears, together EG: 'a3'
// TLDR: it makes this data :'aaabbbuiuuddddd' into this compressed data: 'a3b3u1i1u2d5'

// “IF YOU WISH TO MAKE AN APPLE PIE FROM SCRATCH, YOU MUST FIRST INVENT THE UNIVERSE” - Carl Sagan

// First we need some data to compress!:
// Let's create data representing an image using a custom function, I am going to call it imgBuilder.
// the imgBuilder function below Produces a string ( A STRING is a datatype and it's just a letter or letters
// EG:"I am a string" we must use quotes if we want it to be a string
// This STRING our imgBuilder function will create and output, will be the image data we will compress in the next function!
// imgBuilder does this by forming a STRING, using a random letter from the alphabet, repeated a random number of times..// EG:"aaabbbuiuuddddd"
// On this first line of code below we are declaring the function.The format for functions is as follows:

// function aNameForTheFunction (PARAMETERS, GO, HERE) {
//   The code that I want to execute each time I call this function goes inside of the curly brackets
// };

// You will see semicolons a lot in Javascript (The Programming Language we are writing this tutorial in)
// Semicolons just mean it's the end of the command, function, variable ETC.
// Note that imgBuilder below takes no PARAMETERS because the () are empty. We will see some parameters and how they work later.

function imgBuilder() {
  // Here I am declaring that a VARIABLE, called alphabet, should be equal to the value to the right of the equals sign.
  // In this case it's a data structure called an ARRAY, see those square brackets? That means it's an ARRAY.
  // In this alphabet ARRAY are a bunch of items, in this case it's the letters of... The Alphabet!
  // See how each letter is surrounded by Quotes? That means that each letter is a STRING. Cool! Each string is seperated by a comma.
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  // VARIABLES can be named, and store ANYTHING including ARRAYS that store STRINGS
  // Some examples:
  // var y = 10;
  // var x = y;        Variables can equal variables!
  // x = 10;
  // Strings:
  // var name = "Emmanuel";
  // Numbers....
  // var age = 100;
  // Next lets create a variable that is an empty ARRAY to store letters in.
  // I can call it anything I want! But I'm going to name it something that describes to me what it is. This will be important as we begin
  // Coding more !
  // I'll call it storageArray. Pretty sweet name right?
  var storageArray = [];
  // Ok our next big topic is called a "For loop". Loops do just that. They loop and execute the code inside of it over and over again
  // At least they will loop until a CONDITION is met. We can make loop 1 or 1000000000000 times or whatever we like.
  // Or it could not run at all depending on the CONDITON.
  // Look below where it starts with for. inside the parenthesis ()  are three expressions,
  // each one is seperated by a semicolon these are called - (INITIALIZATION; CONDITION; FINAL-EXPRESSION)
  // In the INITIALIZATION expression I declare that variable "i" will be equal to 0.
  // Since we see a ; after 0, that means its the end of the first expression.
  // Now to our middle expression: CONDITION. The loop will only execute if the CONDITION is TRUE.
  // We just set i = 0. Our alphabet.length = 26  So this expression resolves to TRUE because 0 is less than or equal to 26.
  // Basically  that middle expression is asking is 0 less than or equal 26? Yes it is! So this middle expression is true!
  // At this point the loop runs the code inside! eventually this CONDITION will be FALSE. More on this later..
  // AFTER all  code inside the loop is run, the loop looks at the last condition called the FINAL-EXPRESSION
  // In this expression it just says i++... In code this means increase i by 1. i is now equal to 1!
  // This completes a loop!

  // The loop just completed the first cycle, at this point it goes directly to the CONDITION, is it true?
  // i is now equal to 1. and the length of our alphabet array is still 26  so (i <= alphabet.length) is TRUE.
  // So it runs the code inside the loop again.
  // But WAIT! you should be thinking... We just skipped the INITIALIZATION statement! That statement is only looked at on the first run
  // of the loop.
  // The cycle continues until the CONDITION is no longer true EG i > 26
  for (var i = 0; i <= alphabet.length; i++) {
    // See that curly bracket at the end of the line above ? ^
    // Everyhing inside of that bracket is code that will be ran each loop. Brackets have matching pairs. { }.
    // They should always be in a matching pairs. Good  [], {}, (). ({[]}) Bad: [, }, (.. Etc.

    // Lets produce a random number!
    // This variable I named randomNumber stores (As all variables do) whatever is to the right of the equals sign. In this case it will be a random number between 26 and 1.
    // Don't worry about the Math stuff. Just imagine that on the right of the equals sign there is a random number.. That's whats happening behind the scences..
    var randomNumber = Math.floor(Math.random() * (alphabet.length - 1) + 1);
    // Lets make a variable to store a random Character from the alphabet array.
    // See the brackets [ ] after alphabet below? we can pick a specific item from an ARRAY by entering a number between those brackets.
    // This number is reffered to as an INDEX.
    // Arrays store things and assign that thing an index.
    // The indexes are assigned in this order:      [0,    1,   2]
    // And the data AT those indexes look like this ["a", "b", "c"]
    // Note how the indexes start at 0 ?
    // So if randomNumber below = 1.
    // And alphabet = ["a", "b", "c"]
    // this variable would store "b"
    var randomCharacter = alphabet[randomNumber];
    // Next let's make a variable that stores how many times a letter repeats.
    // I only want them to repeat say... 10 times maximum.
    // So I create a variable called randomMaxTen, and use the .random() method (You will learn more about methods another time)
    // and define that it should be a max of 10 and a minimum of 1.
    // This will make randomMaxTen = a random number between 1 and 10
    var randomMaxTen = Math.floor(Math.random() * (10 - 1) + 1);

    // OK we are almost done!
    // In Javascript things inside parenthesis are evaluated first () and when a parenthesis is inside of a parenthesis like (A(B))
    // B gets evaluated 1st and A gets evaluated 2nd!

    // In looking at the line below what gets evaluated first?..
    // randomMaxTen does!
    // Lets say randomMaxTen is = to 7 for this example.
    // Next is the outer parenthesis.
    // We made our randomChar  = to 'b' in our example above so lets go with that.
    // See that .repeat part? its calling the repeat method.
    // And since we decided that randomMaxTen is = 7.
    // It's going to repeat'b' 7 times.
    // Cool so now we have 'bbbbbbb'
    // Lets use the .push method to PUSH those letters into of our storageArray.
    storageArray.push(randomCharacter.repeat(randomMaxTen));
    // So now storageArray = ["bbbbbbb"]; SWEEEET!!
  }
  // If you made it here. You are a CHAMP!
  // The final line of code in this FUNCTION, as is with most FUNCTIONs.
  // Is the RETURN statement.
  // This line of code is just that. What should this FUNCTION RETURN or 'output'
  // Since we are trying to make a representation of data in the form of a string like: "aaabbbecc"
  // We should return a string right?
  // Remember how our storageArray is an ARRAY?  But we want a string right?
  // Well thankfully there is a METHOD called ".join" which will take an ARRAY and combine all the items into the form of a STRING.
  // Great! So whats inside the parenthesis? in the case of this .join METHOD, what's inside is called a PARAMETER.
  // See METHODs are FUNCTIONs! it's a special name, in this case it basically means we dont have to write them ourselves.
  // The .join method takes a PARAMETER called SEPERATOR, it defines what to seperate the items by.
  // Since there is nothing between the quotes, yup I dont want them seperated at all!
  // So for example if I coded: return storageArray.join('x')
  // the function would return "axaxaxaxaxaxa"
  // If I used a space... "a a a a a a a"
  // Ok so at this point the line below would return something like this: "aaabjjjjssdddkkkkk"
  return storageArray.join("");
  // Congrats you now know how a random data generating algorithm works!
  // TLDR: We made a custom function that makes a random Number, it uses that random number to choose a letter from the alphabet,
  // Then it repeats that letter a random amount of times.
  // and pushes that combination of letters to an array.
  // And does this over and over again inside a loop until we tell it to stop with a CONDITION.
  // and then we combined all the letters in the array into a string and returned it!.
  // Congrats! You are a PRO-GRAMMER!
}
// Let's store the return of that function into this VARIABLE.
// look to the right of = below. See how we type the name of that function from above here, and then type (); right after?
// those () make imgBuilder run.
// And imageBuilder RETURNS something like this: "aaabjjjjssdddkkkkk"
// So builtImg = "aaabjjjjssdddkkkkk"
var builtImg = imgBuilder();

// Compression Algorithm ----
// Ok so we now that we have some data to compress. Let's compress it!
// Let's make a function called compress.
// Compress takes STRING of uncompressed data like: 'abbcccdddd' defined below as src.
// So src = "aaabjjjjssdddkkkkk" for example.
// We will loop through src and look at each letter one at a time.
// We keep track of how many times that letter appears in a row and store that number
// When we reach a letter that is not the same as the last.
// We store the number of times we saw the previous letter and the letter itself.
// For Example:
// "aaabbc"
// "a3b2c1"
function compress(src) {
  // We create storage array to store our compressed data
  var arr = [];
  // Set intial variables to my defaults
  var count = 0;
  var lastChar = "";
  // Loop the number of times there are characters in src.
  for (var i = 0; i <= src.length; i++) {
    // Set the currentChar to be the character in src at the position i
    // On first loop i = 0.
    // And for example src = "aaabjjjjssdddkkkkk"
    // currentChar = "a";
    var currentChar = src[i];
    // If the statement inside the (  ) is TRUE.. The code between the { } will run!
    // So this code inside the (  ) below is asking: is lastChar equal to an empty string?
    // We set it to that above so on the first run of the loop this statement is TRUE. So it runs the code inside { }
    // The code it runs sets lastChar to the value of currentChar.
    // So now lastChar = "a";
    if (lastChar === "") {
      lastChar = currentChar;
    }
    // If the the current character is the same as the lastChar EG: 'aa' increment the count
    if (currentChar === lastChar) {
      count++;
    } else {
      // ELSE means: In case the IF above is NOT TRUE, run the code in here.
      // Since we are running the code in here it means that  the current charcter we are looking at is not the same as the last.
      // For example we are looking at the character 'b' in the string 'aaab' so we have reached the end of 'a's run.
      // So we:
      // Combine the lastChar 'a' with the number of times we saw it 3. To form "a3" and push it to our storage array.
      // After this line runs arr = ["a3"]
      arr.push(lastChar + count);
      // We can now update the last character we looked at to 'b'
      lastChar = currentChar;
      // Reset count to 1 since the charcter we are looking at is the first time in this "Run"
      count = 1;
    }
    // This loop runs over the entire src for as many times as there are characters
  }
  // When we have finished those loops.
  // We combine all the values at all the indexes of arr into a single string using .join("")
  // So if arr = ['a3,'b2']
  // compressedString = "a3b2"
  var compressedString = arr.join("");
  // Congrats ! we just compressed that data!
  // Let's return this compressed string out of this function so we can use it somewhere else!
  return compressedString;
};

// Time to run this bad boy!
// Remember how we saved the image data we built into a variable called builtImg ?
// Let's store the result of running compress with builtImg as the input!
var compressionResult = compress(builtImg);

// Percentage compressed Algorithm -
// Calculates and displays the percentage of compression applied to the data.
// It takes 2 PARAMETERS intputLength and outPutLength
// inputLength = length of the Uncompressed data, and outPutLength = length of the Compressed data.
// It does some basic math to display the percentage of compression achieved.
var percentageCompressed = (inputLength, outputLength) => {
  // let's make a variable called difference to store the difference between intputLength and outPutLength.
  // These example numbers will change based on the data you run this function on.
  // If the inputLength is = 10, and outPutLength is 6..
  // inputLength-outPutLength = 4
  // Therefore difference = 4
  var difference = inputLength - outputLength;
  // Let's do something similar This time finding the average, by dividing the difference by the input length
  // For example if:
  // difference = 4
  // inputLength = 12
  // 4/12 = 0.333333333
  // average = 0.333333333
  var average = difference / inputLength;
  // let's store the final result we are looking for which is
  // the percentage we have compressed the data into this result variable below.
  // We do that by taking the average and multiplying it by 100.
  // The .toPrecision(4) limits it to 4 characters for example this would convert 22.422222222222 into 22.42
  // result = 22.42
  var result = (average * 100).toPrecision(4);
  // Let's return this result out of this function so we can use is somewhere else.
  return result;
};

// Let's store the return value (result) of running our percentageCompressed algo in this percentCompressed variable.
// Here I run percentageCompressed with 2 parameters.
// The first parameter is builtImg and I add .length; This will RESOLVE to the length of the thing before the period.
// First parameter is the length of the Uncompressed data. Lets say its 10
// Second parameter is the length of the Compressed data. Lets say its 5
// In our example this is the same as running percentageCompressed(10,5)
var percentCompressed = percentageCompressed(builtImg.length, compressionResult.length);

// WOW what a champ you are for making it here!
// I hope you've enjoyed this! Now.....
// Let's display the results of our algorithms to the screen!
console.log("Your imgBuilder function made This data: " + builtImg);
console.log("Your compression function compressed it into this: " + compressionResult);
console.log("Number of characters in Uncompressed data: " + builtImg.length);
console.log("Number of characters in Compressed data: " + compressionResult.length);
console.log("You compressed your data by : " + percentCompressed + "% !!");
console.log("Congratulations you have just learned some of the basics of programming!");
console.log("What are you going to make next? :)");

