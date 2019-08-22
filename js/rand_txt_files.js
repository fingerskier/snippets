const find = require('find')
const fs = require('fs')

find.file('..', (files)=>{
    console.log(files)
})

function random_str(length=3) {
    var result           = '';
    var characters       = 'aeouacemnorsuvwxz';
    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function random_obj(length=3) {
    let result = {}

    for (let i=0; i < length; i++) {
        key = random_str()
        val = random_str()

        result[key] = val
    }

    return result
}

function make_rand_file() {
    filepath = `.\\dat\\${random_str()}`
    filename = `${random_str()}.${random_str()}`
    filedata = random_obj(Math.ceil(Math.random()*10))

    if (!fs.existsSync(filepath)) fs.mkdirSync(filepath)

    fs.writeFile(`${filepath}\\${filename}`, JSON.stringify(filedata), console.log)
}


for (let i=0; i < 100; i++) make_rand_file()
