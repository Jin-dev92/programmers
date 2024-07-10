function solution(dots) {
    const c = getCombinations(dots, []);
    if (checkThreePointInline(c)) {
        return 0
    }
    return Number(c.length !== new Set(c).size)
}

function getInclination(a, b) {
    return (b[1] - a[1]) / (b[0] - a[0])
}

function checkThreePointInline(arr) {
    // 세점이 일직선 상 위에 있을 경우 조건에 위배된다.
    const frequency = {};
    arr.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    for (const count of Object.values(frequency)) {
        if (count === 3) {
            return true;
        }
    }
    return false;
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


const dots = [[1, 2], [2, 1], [3, 4], [4, 5]]
/*
*  반례
* [[1, 2], [2, 1], [3, 4], [4, 5]] => 0
* */
console.log(solution(dots))