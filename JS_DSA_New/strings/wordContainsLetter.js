// 2942. Find Words Containing Character

/**
 You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
 */

const findWordsContaining = function(words, x) {
    const indices = [];
    for(let i = 0; i < words.length; i++){
        let ele = words[i];
        for(let j = 0; j < ele.length; j++){
            if(ele[j] === x){
                indices.push(i);
                break; // without break same index will push multiple times if same target latter repeats 
            }
        }
    }
    return indices;
};