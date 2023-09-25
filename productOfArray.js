let arr1 = [1, 2, 3],
  arr2 = [1, 2, 3];

const productOfArray = (arr1, arr2) => {
  let productArr = [];

  // Find the minimum length between the two arrays
  // const minLength = Math.min(arr1.length, arr2.length);

  for (let i = 0; i < arr1.length; i++) {
    productArr.push(arr1[i] * arr2[i]);
  }
  return productArr;
};

console.log(productOfArray(arr1, arr2));
