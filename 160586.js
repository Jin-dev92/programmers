function solution(keymap, targets) {
    var answer = [];
    for (const target of targets) { // ABCD
        let memo = [];
        for (const letter of target) {
            let current = 1e9;
            if (!keymap.join("").includes(letter)) {
                break
            }
            for (const key of keymap) {
                if (!key.includes(letter)) {
                    continue;
                }
                const index = key.indexOf(letter)
                if (index !== -1) {
                    current = Math.min(current, index)
                    if (current === 0) break;
                }
            }
            if (current !== 1e9) {
                memo.push(current);
            }
        }
        answer.push(memo.length > 0 ? memo.reduce((acc, cur) => acc + (cur + 1), 0) : -1)
    }
    return answer;
}


const keymap = ["AA"]
const targets = ["B"]


const result = solution(keymap, targets);
console.log("result: ", result); // [9, 4]
