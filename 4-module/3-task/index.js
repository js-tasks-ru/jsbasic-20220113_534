function highlight(table) {
    let trs = table.querySelectorAll('tr')
    for (let [i, row] of trs.entries()) {
        let tds = row.querySelectorAll('td')
        let a = tds[tds.length - 1].getAttribute('data-available')
        if (a == "true") {
            row.classList.add('available')
        }
        if (a == "false") {
            row.classList.add('unavailable')
        }
        if (!a && i != 0) {
            row.hidden = 'true'
        }
        let b = tds[tds.length - 2].innerHTML
        if (b == "m") {
            row.classList.add('male')
        }
        if (b == "f") {
            row.classList.add('female')
        }
        let c = tds[tds.length - 3].innerHTML
        if (c <= 18) {
            row.style = "text-decoration: line-through"
        }

    }

}