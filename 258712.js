/*
    선물 지수 = 준 선물 수 - 받은 선물 수
    return: 다음 달에 가장 많은 선물을 받는 친구가 받을 선물의 갯수
*/


function solution(friends, gifts) {
    let answer = 0;
    const dp = Array.from(Array(friends.length), () => Array(friends.length).fill(0))
    for (const gift of gifts) {
        const [giver, receiver] = gift.split(" ")
        const giverIndex = friends.indexOf(giver)
        const receiverIndex = friends.indexOf(receiver)
        if (giverIndex > 0 && receiverIndex > 0) {
            dp[giverIndex][receiverIndex] += 1
        }
    }

    for (const friend of friends) {
        const friendIndex = friends.indexOf(friend);

    }

    return answer;
}


const result = solution(["muzi", "ryan", "frodo", "neo"],
    ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"])

console.log(result)