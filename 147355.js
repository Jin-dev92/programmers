function solution(t, p) {
    var answer = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        const part = t.substring(i, i + p.length);
        if (+part <= +p) {
            answer++;
        }
    }
    return answer;
}

const result = solution("3141592", "271");
console.log(result) // 2