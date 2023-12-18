const arr = [1, 2, [10, 20], [100, 200, [30, 40, [1000, 2000]]]];

function deepClone(array) {
  const copyArray = [];

  for (let i = 0; i <array.length; i++) {
    if (Array.isArray(array[i])) {
      const tempClone = deepClone(array[i]);
      copyArray.push(tempClone);
    } else {
      copyArray.push(array[i]);
    }
  }

  return copyArray;
}

console.log(deepClone(arr));