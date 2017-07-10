function locationHashChanged() {
    let URL = location.hash.split('|')

    let action = URL[0].slice(1)
    let id = URL[1]
    let target = `#${URL[2]}`
}

window.onhashchange = locationHashChanged;
