function checkSpam(str) {
    let flag = false
    let flag2 = false
    str = str.toUpperCase();
    for (let i = 0; i <= str.length - 3; i++) {
        if (str.substring(i, i + 3) === "XXX") {
            flag = true
        }
    }
    for (let i = 0; i <= str.length - 5; i++) {
        if (str.substring(i, i + 5) === "1XBET") {
            flag2 = true
        }
    }
    if (flag || flag2) {
        return true
    } else {
        return false
    }
}