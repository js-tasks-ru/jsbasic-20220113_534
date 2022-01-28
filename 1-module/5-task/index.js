function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str
    } else {
        let ocnova = str.substring(0, maxlength - 1);
        return (ocnova + '\u{2026}')
    }
}