function templater(id, data, target){
    var tmpl = document.querySelector(id)

    data.forEach(repl=>{
        let me = tmpl.content.querySelectorAll(repl.sel)
    })

    target.appendChild(tmpl.content.cloneNode(true))
}
