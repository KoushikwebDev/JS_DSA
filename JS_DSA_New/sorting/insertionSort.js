const arr = [7, 4, 3, 5, 1, 2]; 

// the for loop will starts from i=1 position, and the other loop will check its previous values, and if any bigger value found then the bigger value will shift to p + 1 position, and this process will continue until the current element will be positioned at correct place.

// Here current element will check with its previous values if any bigger value found then while loop will continue, and the bigger value will shift p + 1 position

// when while loop breaks then the current element will be positioned at p + 1

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {

    const currentEle = arr[i];
    let prevIndex = i - 1;

    while (arr[prevIndex] > currentEle && prevIndex >= 0) {
      arr[prevIndex + 1] = arr[prevIndex];

      prevIndex--;
    }

    arr[prevIndex + 1] = currentEle;
  }

  return arr;
};

console.log(insertionSort(arr));

// Bubble Sort:
// Keep pushing largest element to the end.

// Selection Sort:
// Keep pulling smallest element to the front.

// Insertion Sort:
// Keep inserting the current element to its correct position in the sorted part of the array.