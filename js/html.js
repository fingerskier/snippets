a = (href, text)=>{
    return `<a href="${href}">${text}<\a>`
}

function parseChildren(){
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    var result = ''

    for (var X of args) {
        if ($.isFunction(X)){
            result += X()
        } else if ($.isArray(X)) {
            for(var Y of X){
                result += children(Y)
            }
        } else if (X.toString) {
            result += X.toString()
        } else {
            result += X
        }
    }

    return result
}

hr = ()=>{
    return '<hr/>'
}

nav = (child)=>{
    return `<nav>${child()}</nav>`
}
