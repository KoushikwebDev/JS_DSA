// asc => ascending order => 1,2,3,4,5
// desc => descending order => 5,4,3,2,1

// In every itaration the largest ele will move to the last, and so on
// pushes the largest element to the end in each pass

const arr = [4, 9, 1, 2, 0];

const bubbleSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // actually the j will go upto for this case j=3
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(bubbleSort(arr));

// Time Complexcity = O(n2) => worst case, and best case O(n) for already sorted array

// Why n - 1 - i?

// After each pass, the largest unsorted element moves to its correct position at the end. Therefore the last i elements are already sorted and don't need to be checked again.

// Optimised for the sorted array

const bubbleSort2 = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        swapped = true;
      }
    }

    console.log(swapped);

    if (!swapped) break;
  }

  return arr;
};

console.log(bubbleSort2([3, 2, 3, 4, 1]));


// Bubble Sort:
// Keep pushing largest element to the end.

// Selection Sort:
// Keep pulling smallest element to the front.

// Insertion Sort:
// Keep inserting the current element to its correct position in the sorted part of the array.