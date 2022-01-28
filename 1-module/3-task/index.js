function ucFirst(str) {
    if (str === "") {
        return str
    } else {
        let first = str[0];
        let second = str.substring(1);
        first = first.toUpperCase();
        return (first + second);

    }
}