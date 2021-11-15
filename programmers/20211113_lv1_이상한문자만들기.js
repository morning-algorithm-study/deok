// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

const s = "try hello world";

// 의식의 흐름으로 실패
function solutionFail(s) {
  var answer = "";
  let temp_arr = [];
  let index_arr = [];
  const stringToArr = Array.from(s);

  stringToArr.map((l, i) => {
    i % 2 === 0
      ? temp_arr.push(l.toUpperCase())
      : temp_arr.push(l.toLowerCase());
  });

  const arrWithNoSpace = temp_arr.filter((l, i) => {
    if (l !== " ") {
      return l;
    } else {
      index_arr.push(i);
    }
  });

  for (let i = 0; i < index_arr.length; i++) {
    arrWithNoSpace.splice(index_arr[i], 0, " ");
  }

  answer = arrWithNoSpace.join("");
  console.log(answer);
  return answer;
}

// 검색 후 참고하여 성공
function solution(s) {
  let index = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      index = 0;
      result += " ";
    } else {
      result += index % 2 ? s[i].toLowerCase() : s[i].toUpperCase();
      index++;
    }
  }
  console.log(result);
  return result;
}

solution(s);
