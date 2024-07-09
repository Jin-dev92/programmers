function solution(s, skip, index) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        let newChar = String.fromCharCode(((charCode - 97 + index) % 26) + 97);

        let count = index;
        while (count > 0) {
            charCode = ((charCode - 97 + 1) % 26) + 97;
            newChar = String.fromCharCode(charCode);

            if (!skip.includes(newChar)) {
                count--;
            }
        }

        if (!skip.includes(newChar)) {
            result += newChar;
        }
    }

    return result;
}

const result = solution("aukks", "wbqd", 5);
console.log(result); // Should print the transformed string according to the rules