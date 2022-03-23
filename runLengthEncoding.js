// This is the replication of a very old data compression algorithm called "Run Length Encoding"
//https://en.wikipedia.org/wiki/Run-length_encoding#:~:text=Run%2Dlength%20encoding%20(RLE),than%20as%20the%20original%20run

// In this example we will be creating a "Image" compression algorithm.
// The function COMPRESS will take the representation of a JPG in the form of a string EG: 'aaabbbuiuuddddd'
// it will count the number of times in a row a letter appears.
// It will then combine the letter and number of times in a row it appears into EG: 'a1
// Basically it makes this data :'aaabbbuiuuddddd' into this data: 'a3b3u1i1u2d5'
// You are about to learn how a simple compression algorithm works! Let's go!

//First we need some data to compress:
// Let's create an "Image"  using the function I called imgBuilder
//imgBuilder Produces a string representing an image.
// It does this by creating a string using a random letter from the alphabet, repeated a random number of times.. /// For example = 'aaabbbuiuuddddd'
//
let imgBuilder = () => {
	// Here I am declaring that the variable I am calling "alphabet" should be equal to the value to the right of the equals sign. In this case it's a data structure called an array, see those square brackets. That means its an array. In this array are a bunch of items, in this case it's the letters of... The Alphabet!
	let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	// Next lets create an empty array to store letters in.
	let storageArr = [];
	// This is called a "For loop", within the parenthesis () are three expressions, each one is seperated by a semicolon these are called - (INITIALIZATION; CONDITION; FINAL-EXPRESSION) In the INITIALIZATION expression I declare that "i" will be equal to 0... That's all. Now to our middle CONDITION expression: The loop will not proceed if the CONDITION is not TRUE. We just set i to equal 0, and the length of our alphabet array is greater than or equal to i. Meaning this CONDITION evaluates to TRUE. So the loop runs the code  inside the loop Immediately. AFTER the code inside the loop is run, the loop looks at the last condition called the FINAL-EXPRESSION  i++ means increment i by 1. i is now equal to 1!
	//The loop just completed the first cycle, at this point it goes straight to the CONDITION, if its true? Yup it runs the code inside the loop. But we just skipped the INITIALIZATION statement! Yes that statement is only looked on on the first run of the loop. The cycle continues until the CONDITION is no longer true EG i > the length of the alphabet array.  Congratulations you just learned one of the most commonly used patterns in programming!
	for (let i = 0; i <= alphabet.length; i ++) {
		//I am now speaking to you from inside the for loop. Remember this code will only run if the ?? Yup if the CONDITION is TRUE.
		// Lets produce a random number which we will in the next lines of code..lets leave this line unexplained for now..
		let randomNumber = Math.floor(Math.random() * (alphabet.length - 1) + 1);
		// Lets make a variable equal to a random Character from the alphabet array, at the position in the array chosen by randomNumber we created in the line above
		// see the brackets after alphabet? we can pick a specific item from an array by entering a number there. This number is reffered to as an INDEX. So we just chose an item from alphabet with a .... Random Index. Which letter will it be?! Stay tuned.
		 let randomChar = alphabet[randomNumber];
		// I want to define how many times a letter repeats. I only wnat them to repeat say... 10 times maximum.
		// So I create a variable called randomMaxTen, and use the .random() method (You will learn more about methods another time) and define that it should be a max of 10 and a minimum of 1.
		// This will make randomMaxTen = a random number between 1 and 10
		let randomMaxTen = Math.floor(Math.random() * (10 - 1) + 1);

		// OK we are almost done!
		// In Javascript things inside parenthisis are evaluated first () and when a parenthesis is inside of a parenthisis like (A(B))
		// B gets evaluated 1st and A gets evaluated 2nd.
		// in looking at the line below what gets evaluated first ? randomMaxTen does! Lets say randomMaxTen happens to evaluate to 7 for this example.
		// next up is the outer parenthisis, lets say randomChar evaluated to E. See that .repeat part? its calling the repeat method. And since we decided that randomMaxTen is = 7. Then everything inside the Parenthesis to the right of .push will evaluate to...
		// Yup you guessed it EEEEEEE
		// Lets use the .push method to PUSH those letters inside of the storageArr. And now storageArr = ['EEEEEEE'];
		storageArr.push(randomChar.repeat(randomMaxTen));
	}
	// If you made it here. You are amazing!
	// Final line of code of this function as is with most functions is the return statement.
	// This line of code is just that. What should this code RETURN or OUTPUT
	// Since we are trying to make a representation of data in the form of a string like: "aaabbbecc"
	// We should return a string.
	// Remember how our storageArr is an ARRAY?  But we want a string right?
	// Well thankfully there is a METHOD called .join which will take an array and combine all the items into the form of a string.
	// Great! So whats inside the parenthisis? in the case of this .join method, what's inside is called a PARAMETER.
	// See methods are functions themselves! This are part of javascript. And are VERY useful.
	// So METHODS are just FUNCTIONS that we dont have to program. Sweet!!
	// The .join method takes a PARAMETER called SEPERATOR it defines what to seperate the items by. Since there is nothing between the quotes, yup I dont want them seperated at all!
	// So for example if I coded: return storageArr.join('x')
	// the code would for example return "ExExExE"
	// If I used a space... "E E E E"
	// Ok so at this point the line below would return something like this: "aaabjjjjssdddkkkkk"
	return storageArr.join('');
	// Congrats you now know how a random data generating algorithm works!
}

// Percentage compressed Algorithm - takes initial length of uncompressed string and the output length of compressed string and does some basic math
let percentageCompressed = (inputLength, outputLength) => {
	let difference = inputLength - outputLength;
	let average = difference / inputLength;
	// Returns the average times 100 for a percentage and limits it to 4 characters EG: 22.42%
	return (average * 100).toPrecision(4);
}

// Encoding Algorithm ----
// Takes string of uncompressed img EG: 'abbcccdddd' defined here as 'src'
var compress = (src) => {
	//create storage array
	var arr = [];
	// Set intial variables to my defaults
	var count = 0;
	var lastChar = '';
	// Loop the number of times there are characters in src
	for (var i = 0; i <= (src.length); i++) {
		// Set the current character to be the character in src at the position i
		var currentChar = src[i];
			//If the lastChar is still set to default, then set it to the curretChar IE we are at our first character
			if(lastChar === ''){
				lastChar = currentChar;
			}
		//If the the current character is the same as the lastChar EG: 'aa' increment the count
		if (currentChar === lastChar){
			count ++;


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
	var compressed = arr.join('');

	//log the following data to the screen:
	console.log('Uncompressed input: ' + src);
	console.log("Length of Uncompressed input: " + src.length);
	console.log('Compressed Output: ' + compressed);
	console.log("Length of Compressed output: " + compressed.length)
	console.log("Percentage compressed: " + (percentageCompressed(src.length, compressed.length)) + "%" )

		//return encoded string
	return compressed;
}
//Run the Encoding Algorithm using the output of the imgBuilder Algorithm.
compress(imgBuilder());
