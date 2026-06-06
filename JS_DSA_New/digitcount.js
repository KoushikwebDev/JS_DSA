function countDigits(num){
    if(num === 0) return 1; // Special case for 0, which has 1 digit
    let numCopy = Math.abs(num); // Handle negative numbers by taking absolute value
    let count = 0;
    while(numCopy > 0){
        numCopy = Math.floor(numCopy / 10);
        count++;
    }
    return count;
}

console.log(countDigits(12345));