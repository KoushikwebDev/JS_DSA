const merge = (arr, low, mid, high) => {

    const temp = [];

    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {

        if (arr[left] <= arr[right]) {
            temp.push(arr[left++]);
        } else {
            temp.push(arr[right++]);
        }
    }

    while (left <= mid) {
        temp.push(arr[left++]);
    }

    while (right <= high) {
        temp.push(arr[right++]);
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
};

const mergeSort = (arr, low = 0, high = arr.length - 1) => {

    if (low >= high) {
        return;
    }

    const mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);

    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
};

const arr = [7, 1, 5, 4, 3, 2];

mergeSort(arr);

console.log(arr);