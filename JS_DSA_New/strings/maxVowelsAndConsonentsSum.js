//3541. Find Most Frequent Vowel and Consonant

var maxFreqSum = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelMap = {};
  let consonentMap = {};

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (!vowelMap[s[i]]) {
        vowelMap[s[i]] = 1;
      } else {
        vowelMap[s[i]]++;
      }
    } else {
      if (!consonentMap[s[i]]) {
        consonentMap[s[i]] = 1;
      } else {
        consonentMap[s[i]]++;
      }
    }
  }

  let maxVowel = 0;
  let maxConsonant = 0;

  // Find maximum vowel frequency
  for (let key in vowelMap) {
    maxVowel = Math.max(maxVowel, vowelMap[key]);
  }

  // Find maximum consonant frequency
  for (let key in consonentMap) {
    maxConsonant = Math.max(maxConsonant, consonentMap[key]);
  }

  return maxVowel + maxConsonant;
};

console.log(maxFreqSum("successs"));
