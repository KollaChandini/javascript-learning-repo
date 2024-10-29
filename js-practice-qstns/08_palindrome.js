// Palindrome Checker

// Write a function that checks whether a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring spaces, punctuation, and capitalization).
function palindrome(str) {
  const normalized_string = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const rev_str = normalized_string.split("").reverse().join("");
  return rev_str == normalized_string;
}
console.log(palindrome("hello"));
