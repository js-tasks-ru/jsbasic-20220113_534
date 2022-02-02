function showSalary(users, age) {
    let str = ""
    users.forEach((item) => {
        if (item.age <= age) {
            str += `${item.name}, ${item.balance}\n`
        }
    })
    return str.substring(0, (str.length - 1))
}