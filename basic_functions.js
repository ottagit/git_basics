let num_arr = [1,2,3,4,5,6];

function sumEven() {
  let sum = 0;
  num_arr.forEach((e, i) => {
    if (e % 2 === 0) {
      sum += e;
    }
  });
  return sum;
}
// log out return value of function
console.log(sumEven());

function returnOdd() {
  return num_arr.filter(e => !(e % 2 === 0));
}

console.log(returnOdd());