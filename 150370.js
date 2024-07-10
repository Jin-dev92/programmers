function solution(today, terms, privacies) {
    const term = terms.reduce((acc, t) => {
        const [type, limit] = t.split(' ');
        acc[type] = limit;
        return acc;
    }, {})

    return privacies.reduce((acc, current, index) => {
        const [date, type] = current.split(' ');
        const limit = term[type];
        if (!validate(date, today, Number(limit))) acc.push(index + 1)
        return acc;
    }, [])
}

function validate(privacyDate, today, limit) {
    const DAYS_IN_MONTH = 28;

    let [year, month, day] = privacyDate.split('.').map(n => Number(n));
    let [tYear, tMonth, tDay] = today.split('.').map(n => Number(n));

    month += limit;
    day -= 1;
    if (day === 0) {
        day = DAYS_IN_MONTH;
        month--;
    }

    if (month > 12) {
        month = month % 12;
        year += 1;
    }
    if (month === 0) {
        month = 12;
        year -= 1;
    }

    return tYear < year || (tYear === year && tMonth < month) || (tYear === year && tMonth === month && tDay <= day);
}

const result = solution("2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]);

