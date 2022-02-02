function filterRange(arr, a, b) {
    let newmassiv = arr.filter(item => (item >= a && item <= b));
    return newmassiv;
}