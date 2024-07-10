function solution(board) {
    var answer = 0;
    for (let i = 0; i < board.length; i++) {
        if (!board[i].includes(1)) {
            continue;
        }
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                continue;
            }
            if (board[i][j] === 1) {
                board[i + 1][j + 1] !== 1 ? board[i + 1][j + 1] = 2 : 1
                board[i + 1][j - 1] !== 1 ? board[i + 1][j - 1] = 2 : 1
                board[i - 1][j + 1] !== 1 ? board[i - 1][j + 1] = 2 : 1
                board[i - 1][j - 1] !== 1 ? board[i - 1][j - 1] = 2 : 1

                board[i + 1][j] !== 1 ? board[i + 1][j] = 2 : 1
                board[i - 1][j] !== 1 ? board[i - 1][j] = 2 : 1
                board[i][j + 1] !== 1 ? board[i][j + 1] = 2 : 1
                board[i][j - 1] !== 1 ? board[i][j + 1] = 2 : 1
            }
        }
    }
    return answer;
}

const board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
console.log(solution(board)); //16