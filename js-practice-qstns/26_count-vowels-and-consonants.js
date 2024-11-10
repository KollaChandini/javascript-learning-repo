function countVowelsAndConsonants(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const lowerCaseStr = str.toLowerCase();
  let vowelCount = 0;
  let consonantCount = 0;
  for (let element of lowerCaseStr) {
    if (vowels.has(element)) {
      vowelCount++;
    } else if (/[a-z]/.test(element)) {
      consonantCount++;
    }
  }
  return `vowels: ${vowelCount}, consonants: ${consonantCount}`;
}
console.log(countVowelsAndConsonants("Hello world"));

// /[a-z]/: This is the regex pattern itself.

// /.../: The slashes are used to define a regex pattern in JavaScript.
// [a-z]: This part means "any lowercase letter from 'a' to 'z'".
// .test(element): The .test() method is used to check if the given element (character) matches the regex pattern.

// If element is a lowercase letter (a-z), .test() returns true.
// If element is anything else (like a space, punctuation, or number), .test() returns false.
