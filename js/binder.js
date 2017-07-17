var binder_proxy = {
    get(target, name) {
        return function(strings, ...values) {
            result = ''

            for (I of strings) {
                result += strings[I]
                result += this.data[values[I]]
            }

            return result
        }
    }
    ,
    set(target, prop, value, receiver) {
        target[prop] = value

        this.render()
    }
}

var binder = new Proxy({
    data: {}
}, html_proxy);
