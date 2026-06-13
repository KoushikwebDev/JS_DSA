const reverseNumber = (num) => {
    const numCopy = num;

    let reverseNum = 0;
    num = Math.abs(num);
    while(num > 0){
        const rem = num % 10; // it will grab the last digit of the number

        reverseNum = (reverseNum*10) + rem; 
        
        num = Math.floor(num/10); // it will remove the last digit of the number, by dividing it by 10 and taking the floor value.
    };

    const limit = Math.pow(2,31);

    if(reverseNum < -limit || reverseNum > limit) return 0; // extra condition as per question

    return numCopy < 0 ? -reverseNum : reverseNum;
}

console.log(reverseNumber(-12155));
// console.log(reverseNumber(-9382781281919));