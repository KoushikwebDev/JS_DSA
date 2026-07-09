// 232. Implement Queue using Stacks

var MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

MyQueue.prototype.pop = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2.pop();
};

MyQueue.prototype.peek = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2[this.s2.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


// var MyQueue = function () {
//   this.s1 = [];
//   this.s2 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//   this.s1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//   while (this.s1.length > 1) {
//     this.s2.push(this.s1.pop());
//   }

//   const ans = this.s1.pop();

//   while (this.s2.length) {
//     this.s1.push(this.s2.pop());
//   }

//   return ans;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//   while (this.s1.length > 1) {
//     this.s2.push(this.s1.pop());
//   }

//   const ans = this.s1[0];

//   while (this.s2.length) {
//     this.s1.push(this.s2.pop());
//   }

//   return ans;
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//   return this.s1.length === 0;
// };