function solution(s1, s2) {
  var answer = 0;
  s1.forEach((v) => {
    s2.indexOf(v) != -1 ? answer++ : 1;
  });
  return answer;
}
