function sumSalary(salaries) {
    let summa = 0
    for (let key in salaries) {
        if (Number.isInteger(salaries[key])) {
            summa = summa + salaries[key]
        }
    }
    return summa
}