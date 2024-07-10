function solution(board) {
    var answer = 0;
    const length = board.length
    for (let i = 0; i < length; i++) {
        if (!board[i].includes(1)) {
            continue;
        }
        for (let j = 0; j < length; j++) {
            if (board[i][j] !== 1) {
                continue;
            }
            if (i === 0 && j === 0) {
                board[i + 1][j + 1] !== 1 ? board[i + 1][j + 1] = 2 : 1
                board[i + 1][j] !== 1 ? board[i + 1][j] = 2 : 1
                board[i][j + 1] !== 1 ? board[i][j + 1] = 2 : 1
            } else if (i === 0 && j === length - 1) {

            } else if (i === length - 1 && j === 0) {
            } else if (i === length - 1 && j === length - 1) {
            } else {
                board[i + 1][j + 1] !== 1 ? board[i + 1][j + 1] = 2 : 1
                board[i + 1][j - 1] !== 1 ? board[i + 1][j - 1] = 2 : 1
                board[i - 1][j + 1] !== 1 ? board[i - 1][j + 1] = 2 : 1
                board[i - 1][j - 1] !== 1 ? board[i - 1][j - 1] = 2 : 1

                board[i + 1][j] !== 1 ? board[i + 1][j] = 2 : 1
                board[i - 1][j] !== 1 ? board[i - 1][j] = 2 : 1
                board[i][j + 1] !== 1 ? board[i][j + 1] = 2 : 1
                board[i][j - 1] !== 1 ? board[i][j - 1] = 2 : 1
            }
        }
    }
    return (length ** 2) - board.reduce((acc, cur) => {
        acc += cur.reduce((acc, cur) => {
            if (cur > 0) {
                return acc + 1
            }
            return acc
        }, 0)
        return acc
    }, 0)
}

const board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
// const board = [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]
console.log(solution(board)); //16