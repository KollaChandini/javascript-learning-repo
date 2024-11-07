function capitalizeWords(str) {
  const splitStr = str.split(" ");
  for (let index = 0; index < splitStr.length; index++) {
    let word = splitStr[index];
    if (word[0]) {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
      //   splitStr[index] = word; keeping this here also gives the desired output
    }
    splitStr[index] = word;
    //you're modifying the word, and then at the end of the loop iteration, you assign the modified word back to the array (splitStr[index] = word).
  }
  return splitStr.join(" ");
}
console.log(capitalizeWords("hello world from javascript"));

// slice(1) is a method in JavaScript that extracts a portion of a string starting from the specified index. In this case, slice(1) means "start at index 1 and take everything from there to the end of the string."
//here we are using "word as a temporary variable". so we need to assign it value back to the array. splitStr[index] = word[0].toUpperCase() + word.slice(1).toLowerCase();
