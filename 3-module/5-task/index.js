function getMinMax(str) {
    let domassiv = str.split(" ");
    let newmassiv = [];
    for (let key in domassiv) {
        let element = +domassiv[key];
        if (typeof element === 'number' && !isNaN(element)) {
            newmassiv.push(element)
        }
    }
    let max = newmassiv[0]
    let min = newmassiv[0]
    for (let key in newmassiv) {

        if (newmassiv[key] > max) {
            max = newmassiv[key]
        }
        if (newmassiv[key] < min) {
            min = newmassiv[key]
        }
    }
    let result = {
        "min": min,
        "max": max
    }
    return (result);
}