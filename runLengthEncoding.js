// This is the replication of a very old image compression algorithm.
// it takes the representation of a JPG in the form of a string EG: 'aaabbbuiuuddddd'
// And counts the number of times IN A ROW a letter appears.
// It then appends that letter and number of times into a string and finally combines all values into
// A compressed format. Basically it makes this:'aaabbbuiuuddddd' into this: 'a3b3u1i1u2d5'


//First we need an "Image" to compress:
//imgBuilder Produces a string representing an  image.
// It does this by creating a string using a random letter of alphabet, repeated a random number of times.. EG: 'aaabbbuiuuddddd'
var imgBuilder = () => {
	// Yep its the alphabet..
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	// Create a storage array to push random letters too
	var storageArr = [];
	// Loop the number of times there are letters in the alphabet array
	for (let i = 0; i <= alphabet.length; i ++) {
		// Produce random number  which we will use to select a letter at random form the alphabet
		let randomNumber = Math.floor(Math.random() * (alphabet.length - 1) + 1);
		// Select a random Character from the alphabet array at the position in the array chosen by randomNumber
		 let randomChar = alphabet[randomNumber];
		//Create a random number between 1 and 10
		let randomMaxTen = Math.floor(Math.random() * (10 - 1) + 1);
		// Push that random Character to storage Array and repeat that letter a random number of times (between 1 and 10) in a row
		storageArr.push(randomChar.repeat(randomMaxTen));
	}
	// return the built storage array in the form of a combined string using the join method.
	return storageArr.join('');
}

// Percentage compressed Algorithm - takes initial length of uncompressed string and the output length of compressed string and does some basic math
var percentageCompressed = (inputLength, outputLength) => {
	let difference = inputLength - outputLength;
	let average = difference / inputLength;
	// Returns the average times 100 for a percentage and limits it to 4 characters EG: 22.42%
	return (average * 100).toPrecision(4);
}

// Encoding Algorithm ----
// Takes string of uncompressed img EG: 'abbcccdddd' defined here as 'src'
var encode = (src) => {
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
encode(imgBuilder());
