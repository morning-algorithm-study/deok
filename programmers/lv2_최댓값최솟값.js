function solution(str) {
  let arr = str.split(" ");
  let sortedArr = arr.sort((a, b) => a - b);
  let min = sortedArr[0];
  let max = sortedArr[sortedArr.length - 1];
  let joinText = min.concat(" ", max);
  return joinText;
}
