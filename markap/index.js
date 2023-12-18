function calculateSum() {
  let sum = 5;
  function clouserSum(number) {
    sum += number
    return sum
  }
  return clouserSum;
}

let resultCalculateSum = calculateSum();
console.log(resultCalculateSum(10));
console.log(resultCalculateSum(10));