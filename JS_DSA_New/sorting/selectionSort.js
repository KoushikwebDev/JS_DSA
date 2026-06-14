const arr = [7, 1, 5, 4, 3, 2];

// selection sort => select minimum 

const selectionSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) { // n -1 => because last element will be already sorted
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swaing the min value to the i position
    }
  }

  return arr;
};

console.log(selectionSort(arr));

// Har pass me smallest element dhoondo aur usko correct position pe rakho.

// Bubble Sort:
// Keep pushing largest element to the end.

// Selection Sort:
// Keep pulling smallest element to the front.

// Insertion Sort:
// Keep inserting the current element to its correct position in the sorted part of the array.

// Pass 1:
// [7,1,5,4,3,2]
//  ↓
// [1,7,5,4,3,2]

// Pass 2:
// [1,7,5,4,3,2]
//    ↓
// [1,2,5,4,3,7]

// Pass 3:
// [1,2,5,4,3,7]
//      ↓
// [1,2,3,4,5,7]
