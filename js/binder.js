function binder(data){
    return function(strings, ...values) {
        result = ''

        for (I of strings) {
            result += strings[I]
            result += data[values[I]]
        }

        return result
    }
}