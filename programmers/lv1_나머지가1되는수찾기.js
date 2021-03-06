// 자연수 n이 매개변수로 주어집니다.
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.
// 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
// 입출력 예 설명
// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고,
// 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로,
// 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

// 풀이1: 의식의 흐름
// - n / i 나머지 1인 숫자를 찾아 배열에 처넣고
// 처넣은 배열을 오름차순으로 정리하고
// 그 배열의 가장 작은 수를 리턴
function solution(n) {
  let answer;
  let correctArr = [];
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      correctArr.push(i);
    }
  }
  correctArr.sort((a, b) => a - b);
  answer = correctArr[0];
  return answer;
}

// 풀이2: 간소화 버전
// i가 작은 수부터 도니까 어짜피 가장 처음으로 return되는 i는 가장 작은 수
function solution2(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      console.log(i);
      return i;
    }
  }
}

solution2(5);
