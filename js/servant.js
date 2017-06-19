function Servant(view, data){
    this.render = function(){}

    data = new Proxy({},{
        set(target, key, value){
            let result = target.setItem(key, value)

            render(view, data)

            return result
        }
    })

    return view
}
