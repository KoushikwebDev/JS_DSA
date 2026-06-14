const arr = [7, 1, 5, 1, 4, 3, 2];

// helper function to merge two sorted arr
const merge = (leftArr, rightArr) => {
    const mergedArr = [];
    let i = 0, j = 0;

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] < rightArr[j]){
            mergedArr.push(leftArr[i]);
            i++;
        } else {
            mergedArr.push(rightArr[j]);
            j++;
        }
    };

    // after loop end there can be one arr that have elements, so pushing that ele to the mergedArr

    while(i < leftArr.length) {
        mergedArr.push(leftArr[i]);
        i++;
    };

    while(j < rightArr.length) {
        mergedArr.push(rightArr[j]);
        j++;
    };

    return mergedArr;
}


// merge sort 
const mergeSort = (arr) => {

    if(arr.length < 2) return arr;

    const mid = Math.floor((arr.length)/2);

    const leftArr = mergeSort(arr.slice(0,mid));
    const rightArr = mergeSort(arr.slice(mid));

    return merge(leftArr, rightArr);
}

console.log(mergeSort(arr))

// Time Complexicty => O(nlogn)
// Space Complexcity = O(n)