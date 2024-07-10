function solution(dots) {
    const c = getCombinations(dots, []);
    return Number(c.length !== new Set(c).size)
}

function getInclination(a, b) {
    return (b[1] - a[1]) / (b[0] - a[0])
}

function getCombinations(dots, arr) {
    if (dots.length === 0) {
        return arr
    }
    const [first, ...rest] = dots
    for (const dot of rest) {
        const incline = getInclination(first, dot);
        arr.push(incline)
    }
    return getCombinations(rest, arr)
}


const dots = [[1, 4], [9, 2], [3, 8], [11, 6]]
console.log(solution(dots))