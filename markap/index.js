let userArray = [];
let lengthArray = null;

do {
  lengthArray = prompt('Enter length of massif!');
  lengthArray = parseInt(lengthArray);
} while (isNaN(lengthArray) || !lengthArray);

for (let i = 0; i < lengthArray; i++) {
  let elementArray;
  do {
    elementArray = parseInt(prompt(`Enter your ${i + 1} element!`));
  } while (isNaN(elementArray));
  userArray.push(elementArray);
}

document.write(`Array before sorting: ${userArray} <br>`);

for (let i = 0; i < lengthArray - 1; i++) {
  for(let j = 0; j < lengthArray - i - 1; j++) {
    if (userArray[j] > userArray[j + 1]) {
      let temp = userArray[j];
      userArray[j] = userArray[j + 1];
      userArray[j + 1] = temp;
    }
  }
}

document.write(`Sorted Array: ${userArray} <br>`);

userArray.splice(1, 3);

document.write(`Array after removing elements 2 to 4: ${userArray} <br>`);