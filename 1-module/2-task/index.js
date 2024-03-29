/**
 * Эту функцию трогать не нужно
 */
function print(text) {
    console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(name) {
    if (name != null) {
        let space = false
        for (let i = 0; i <= name.length; i++) {
            if (name[i] === " ") {
                space = true
            }
        }
        if (name.length >= 4 && !space) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}


/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
    let userName = prompt('Введите ваше имя');
    if (isValid(userName)) {
        print(`Welcome back, ${userName}!`);
    } else {
        print('Некорректное имя');
    }
}

sayHello();