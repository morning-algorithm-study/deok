// 0부터 9까지의 숫자 중 일부가 들어있는 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 수 ≤ 9
// numbers의 모든 수는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

const arr = [1, 2, 3, 4, 6, 7, 8, 0];

// 풀이1: 0~9 전체합에서 주어진 배열 합 빼기
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    answer += i;
  }

  for (const number of numbers) {
    answer -= number;
  }
  console.log(answer);
  return answer;
}

// 풀이2: 0~9까지 돌면서 동시에 주어진 배열에 돌고 있는 숫자가 없으면 answer에 더하기
function solution2(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  console.log(answer);
  return answer;
}

// 풀이3: 0~9 총합에서 주어진 배열 합 빼기
function solution3(numbers) {
  let answer = -1;
  answer = 45 - numbers.reduce((acc, cur) => acc + cur);
  console.log(answer);
  return answer;
}

solution(arr);
solution2(arr);
solution3(arr);
