// function solution(s) {
//     var answer = [];
//     for (let i = 0; i < s.length; i++) {
//         if (i > 0) {
//             const letter = s[i];
//             const subStr = s.substring(0, i - 1);
//             for (let j = subStr.length; j === 0; j--) {
//                 if (subStr[j] === letter) {
//                     answer.push(j);
//                     // break;
//                 }
//             }
//         } else {
//             answer.push(-1);
//         }
//     }
//     return answer;
// }


function solution(s) {
    const hash = {};
    return [...s].map((v, i) => {
        let result = hash[v] === undefined ? -1 : i - hash[v];
        hash[v] = i;
        return result;
    });
}

const result = solution("banana");

console.log(result); // [-1,-1,-1,2,2,2]