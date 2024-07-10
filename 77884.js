function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        const divisor = findDivisors(i);
        if (divisor.length % 2 === 0) {
            answer += i
        } else {
            answer -= i
        }
    }

    return answer;
}

function findDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

const left = 13
const right = 17

console.log(solution(left, right)) // 43