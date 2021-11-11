const arr = [1, 5, 2, 6, 3, 7, 4];
const commandTest = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];
  const temp_arr = [];

  for (let i = 0; i < commands.length; i++) {
    let sortedArr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(sortedArr[commands[i][2] - 1]);

    console.log(answer);
  }

  return answer;
}

solution(arr, commandTest);
