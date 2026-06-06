const numberReverse = (num)=>{
    let reverseNumber= 0;
    while(num > 0){
        const rem = num % 10;
        reverseNumber = (reverseNumber*10) + rem;
        num = Math.floor(num/10);
    };

    return reverseNumber;
};

console.log(numberReverse(345));


const isPalidrome = (num)=>{
    if(num < 1) return false;
    
    const reverseNumber = numberReverse(num);
    return reverseNumber === num;
};

console.log(isPalidrome(121));