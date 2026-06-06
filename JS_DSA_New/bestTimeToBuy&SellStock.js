// 121. Best Time to Buy and Sell Stock

/**

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 */


const prices = [7,1,5,3,6,4]

const bestTimeToBuyAndSellStock = (arr)=>{
    let minValue = arr[0];
    let maxProfit = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] < minValue){
            minValue = arr[i]
        };

        const profit = arr[i] - minValue;

        if(profit > maxProfit){
            maxProfit = profit
        }
    };

    return maxProfit;
}

console.log(bestTimeToBuyAndSellStock(prices))