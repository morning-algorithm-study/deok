const str = "1 2 3 4";

function solution(str) {
  let arr = str.split(" ");
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] + " " + sortedArr[sortedArr.length - 1];
}

function solution2(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}

solution(str);
