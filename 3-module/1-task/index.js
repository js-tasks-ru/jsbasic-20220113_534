function namify(users) {
    let newmassiv = []
    users.forEach((item) => {
        newmassiv.push(item.name);
    });
    return newmassiv;
}