function camelize(str) {
    let newmassiv = str.split("");
    for (let i = 0; i < str.length; i++) {
        let defis = newmassiv.indexOf("-");
        if (defis >= 0) {
            newmassiv.splice(defis, 2, newmassiv[defis + 1].toUpperCase())
        }

    }
    let newmassive = newmassiv.join("");
    return newmassive
}