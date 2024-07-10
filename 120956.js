function solution(babbling) {
    return ['aya', 'ye', 'woo', 'ma']
        .reduce((acc, word) => acc.map(e => e.replaceAll(word, ' ')), babbling)
        .map(e => e.split(' ').join('')).filter(e => !e).length;
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))