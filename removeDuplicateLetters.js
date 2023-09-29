let str = "aabbcczz";

const removeDuplicateLetters = (str) => {
  let arr = str.split("");
  console.log(arr);
  let uniquevalue = Array.from(new Set(arr));
  return uniquevalue.join("");
};

console.log(removeDuplicateLetters(str));

const removeDuplicateLetters2 = (str) => {
  let uniqueCharacters = "";

  for (const char of str) {
    if (!uniqueCharacters.includes(char)) {
      uniqueCharacters += char;
    }
  }

  return uniqueCharacters;
};

const str2 = "aabbcczz";
console.log(removeDuplicateLetters2(str2)); // Output: "abcz"
