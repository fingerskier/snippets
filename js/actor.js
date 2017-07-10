var Actor_Proxy = {
    get(target, name){
        this._data = this._data || {}

        function me(strings, ...keys){
            return 'flarn'
        }

        me.prototype.valueOf = this._data[name]

        return me
    }
    ,
    set(target, property, value, receiver) {
        return true
    }
}

var Actor = new Proxy({}, Actor_Proxy);
