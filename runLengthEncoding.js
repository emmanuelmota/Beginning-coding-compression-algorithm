//WELCOME
//This is a draft of tutorial intended to teach absolute new comers to the basics of programing by creating a compression algorithm!

//Here you will learn:
// Variables, functions, arrays, for loops, methods, parameters

// This is the replication of a very old data compression algorithm called "Run Length Encoding"
//https://en.wikipedia.org/wiki/Run-length_encoding#:~:text=Run%2Dlength%20encoding%20(RLE),than%20as%20the%20original%20run

// In this example we will be creating a "Image" compression algorithm.
// The function COMPRESS will take the representation of a JPG in the form of a string EG: 'aaabbbuiuuddddd'
// it will count the number of times in a row a letter appears.
// It will then combine the letter, and number of times in a row it appears, together EG: 'a3'
// Basically it makes this data :'aaabbbuiuuddddd' into this compressed data: 'a3b3u1i1u2d5'

// “IF YOU WISH TO MAKE AN APPLE PIE FROM SCRATCH, YOU MUST FIRST INVENT THE UNIVERSE” - Carl Sagan

//First we need some data to compress!:
// Let's create data representing an image using a custom function, I am going to call it imgBuilder.
// the imgBuilder function below Produces a string ( A STRING is a datatype and it's just a letter or letters EG:"I am a string" remember to use 	quotes)
// This STRING our imgBuilder function will create and output will be the image data we will compress in the next function!
// imgBuilder does this by forming a STRING, using a random letter from the alphabet, repeated a random number of times.. EG:'aaabbbuiuuddddd'
// On this first line I am declaring the function.The format for functions is as follows:

// function aNameForTheFunction (PARAMETERS, GO, HERE) {
//   The code that I want to execute each time I call this function goes inside of the curly brackets
// };

// You will see semicolons a lot in Javascript (The Programming Language we are writing this tutorial in)
// Semicolons just mean it's the end of the command, function, variable ETC.
// Note that imgBuilder takes no PARAMETERS because the () are empty. We will see some parameters and how they work later.

function imgBuilder() {
  // Here I am declaring that a VARIABLE, called alphabet, should be equal to the value to the right of the equals sign.
  // In this case it's a data structure called an ARRAY, see those square brackets? That means it's an ARRAY.
  // In this alphabet ARRAY are a bunch of items, in this case it's the letters of... The Alphabet!
	// See how each letter is surrounded by Quotes? That means that each letter is a STRING. Cool! Each string is seperated by a comma.
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // VARIABLES can be named, and store ANYTHING including ARRAYS.
  // For examples;
  // var x = y;        Variables can equal variables!
  // var name = 'Emmanuel';   Strings...
  // var age = 100;  Numbers....
  // Next lets create an empty ARRAY to store letters in. I'll call it storageArray. Pretty sweet name right?
  var storageArray = [];
  // Ok our next big topic is called a "For loop". Loops do just that. They loop and execute the code inside of it over and over again
  // At least they will loop ntil a CONDITION is met. We can make loop 1 or 1000000000000 times or more... Or it could not run at all depending on the CONDITON.
  // Look below at line 89. inside the parenthesis ()  are three expressions, each one is seperated by a semicolon these are called - (INITIALIZATION; CONDITION; FINAL-EXPRESSION)
  // In the INITIALIZATION expression I declare that "i" will be equal to 0... That's all. Since we see a ; after 0, that means its the end of
  // the first expression.
  // Now to our middle expression: CONDITION. The loop will only execute if the CONDITION is TRUE.
  // We just set i = 0. Our alphabet.length = 26  So this expression resolves to TRUE because 0 is less than or equal to 26 .Basically is 0 < or = 26? TRUE
  // So the loop runs the code inside! eventually this CONDITION will be FALSE. More on this later..
  // AFTER the code inside the loop is run, the loop looks at the last condition called the
  // FINAL-EXPRESSION  i++ means increment i by 1. i is now equal to 1!
  // The loop just completed the first cycle, at this point it goes straight to the CONDITION, is it true?
  // i is now equal to 1. and the length of our alphabet array is still 26  so (i <= alphabet.length) is TRUE.
  // So it runs the code inside the loop again.
  // But WAIT! you should be thinking... We just skipped the INITIALIZATION statement! That statement is only looked at on the first run of the loop.
  // The cycle continues until the CONDITION is no longer true EG i > 26
  // Congratulations you just learned one of the most commonly used patterns in programming!
  for (var i = 0; i <= alphabet.length; i++) {
    // See that curly bracket above at the end of line 56  ^
    // Everyhing inside of that bracket is code that will be ran each loop. Brackets have matching pairs. { }. They are NEVER alone.

    // Lets produce a random number! which we will in the next lines of code..lets leave the math bits unexplained for now..
    // this variable I named randomNumber stores whatever is to the right of the equals sign. In this case it will be a random number between 26 and 1.
    var randomNumber = Math.floor(Math.random() * (alphabet.length - 1) + 1);
    // Lets make a variable to store a random Character from the alphabet array, lets pick the letter in the position in the array chosen by the randomNumber we
    //stored in the line above
    // see the brackets [ ] after alphabet below? we can pick a specific item from an ARRAY by entering a number between those brackets.
    // This number is reffered to as an INDEX.  So if randomNumber = 0 the randomChar below pick the 0th letter in the alphabet array.
    // 0th? Yup arrays start at 0. Like this: [0,1,2]... etc so alphabet[0] would = 'a'
    var randomChar = alphabet[randomNumber];
    // Let's define how many times a letter repeats. I only want them to repeat say... 10 times maximum.
    // So I create a variable called randomMaxTen, and use the .random() method (You will learn more about methods another time) and define that it should be a max of 10 and a minimum of 1.
    // This will make randomMaxTen = a random number between 1 and 10
    var randomMaxTen = Math.floor(Math.random() * (10 - 1) + 1);

    // OK we are almost done!
    // In Javascript things inside parenthesis are evaluated first () and when a parenthesis is inside of a parenthesis like (A(B))
    // B gets evaluated 1st and A gets evaluated 2nd!

    // In looking at the line below what gets evaluated first? randomMaxTen does!
    // Lets say randomMaxTen is = to 7 for this example.
    // Next is the outer parenthesis.
    // We made our randomChar  = to 'a' in our example above so lets go with that.
    // See that .repeat part? its calling the repeat method.
    // And since we decided that randomMaxTen is = 7.
    // Its going to repeat'a' 7 times.
    // Cool so now we have 'aaaaaaa'
    // Lets use the .push method to PUSH those letters inside of our storageArray.
    storageArray.push(randomChar.repeat(randomMaxTen));
    // So now storageArray = ['EEEEEEE']; SWEEEET!!
  }
  // If you made it here. You are a CHAMP!
  // The final line of code in this FUNCTION, as is with most FUNCTIONs, is the RETURN statement.
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
  // To sumarize: We made a custom function that makes a random Number, it uses that random number to choose a letter from the alphabet,
  // Then it repeats that letter a random amount of times.
  // and pushes that combination of letters to an array.
  // And does this over and over again inside a loop until we tell it to stop with a CONDITION.
  // and then we combined all the letters in the array into a string and returned it!.
  // Congrats! You are a PRO-GRAMMER!
}


// Percentage compressed Algorithm - Calculates and displays the percentage of compression applied to the data.
// It takes 2 PARAMETERS  EG intputLength and outPutLength. Which are the length of the Uncompressed data, and the length of the Compressed data.
// It  does some basic math to display the percentage of compression achieved.
var percentageCompressed = (inputLength, outputLength) => {
	// let's make a variable called difference to store the difference between intputLength and outPutLength
	// We declare the variable and call it: difference. Now lets make it store the result of inputLength minus the outPutLength.
	// IF inputLength is = 10, and outPutLength is 6..   10-6 = 4   EG difference = 4
  var difference = inputLength - outputLength;
	// Let's do somethig similar, this time finding the average by dividing the difference by the input length 4/10 =
  var average = difference / inputLength;
  // Returns the average times 100. Converting it to a percentage and limits it to 4 characters for example: 22.42 instead of 22.422222222222
  return (average * 100).toPrecision(4);
};

// Encoding Algorithm ----
// Takes string of uncompressed img EG: 'abbcccdddd' defined here as 'src'
var compress = (src) => {
  //create storage array
  var arr = [];
  // Set intial variables to my defaults
  var count = 0;
  var lastChar = "";
  // Loop the number of times there are characters in src
  for (var i = 0; i <= src.length; i++) {
    // Set the current character to be the character in src at the position i
    var currentChar = src[i];
    //If the lastChar is still set to default, then set it to the curretChar IE we are at our first character
    if (lastChar === "") {
      lastChar = currentChar;
    }
    //If the the current character is the same as the lastChar EG: 'aa' increment the count
    if (currentChar === lastChar) {
      count++;
    } else {
      // Otherwise they are not EG 'ab' so we have reached the end of 'a's run
      //Therefore we will:
      // Push the last Character EG 'a' with the count EG:'a1'
      arr.push(lastChar + count);

      lastChar = currentChar;
      // Reset the since the charcter we are looking at is the first time in this "Run"
      count = 1;
    }
  }

  // take the storage array and combine it into a string EG: arr = ['a1,'b2'] ==== 'a1b2'
  var compressed = arr.join("");

  //log the following data to the screen:
  console.log("Uncompressed input: " + src);
  console.log("Length of Uncompressed input: " + src.length);
  console.log("Compressed Output: " + compressed);
  console.log("Length of Compressed output: " + compressed.length);
  console.log(
    "Percentage compressed: " +
      percentageCompressed(src.length, compressed.length) +
      "%"
  );

  //return encoded string
  return compressed;
};
//Run the Encoding Algorithm using the output of the imgBuilder Algorithm.
compress(imgBuilder());
