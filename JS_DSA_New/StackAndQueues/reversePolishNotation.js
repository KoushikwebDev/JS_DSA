// 150. Evaluate Reverse Polish Notation

/**
 Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
 */


/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    const stack = [];

    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token));
        } else {
            const b = stack.pop(); // here b first because of LIFO property of stack
            const a = stack.pop();

            switch(token){
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a*b);
                    break;
                case "/":
                    stack.push(Math.trunc(a/b))
            }
        }
    };

    return stack.pop();
};