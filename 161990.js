function solution(wallpaper) {
    let s = [0, 0]; // 시작점
    let e = [0, 0]; // 끝점
    let isFirst = true;
    const dp = wallpaper.map((row) => row.split('').map((cell) => Number(cell === '#')));
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            if (dp[i][j] === 1) {
                if (isFirst) {
                    s = [i, j];
                    e = [i, j];
                    isFirst = false;
                } else {
                    s[0] = Math.min(s[0], i);
                    s[1] = Math.min(s[1], j);
                    e[0] = Math.max(e[0], i + 1);
                    e[1] = Math.max(e[1], j + 1);
                }
            }
        }
    }
    if (s[0] === e[0] && s[1] === e[1]) {
        e = [e[0] + 1, e[1] + 1]
    }

    return [...s, ...e];
}

// const wallpaper = ["..........", ".....#....", "......##..", "...##.....", "....#....."]
// const wallpaper = [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]
const wallpaper = ["..", "#."]
const result = solution(wallpaper);
console.log(result)


/*
*
* 1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
function solution(wallpaper) {
    let left = [];
    let top = [];
    let right = []
    let bottom = [];
    wallpaper.forEach((v,i) => {
        [...v].forEach((val,ind) => {
            if(val === "#") {
                left.push(i)
                top.push(ind)
                right.push(i + 1)
                bottom.push(ind + 1)
            }
        })
    })
    return [Math.min(...left), Math.min(...top), Math.max(...right), Math.max(...bottom)]
}

*
* */