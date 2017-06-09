function parseChildren(){
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    var result = ''

    for (var X of args) {
        if (X){
            if ($.isFunction(X)){
                result += X()
            } else if ($.isArray(X) || $.isPlainObject(X)) {
                for(var Y of X){
                    result += parseChildren(Y)
                }
            } else if (X.toString) {
                result += X.toString()
            } else {
                result += X
            }
        }
    }

    return result
}

function tag(name, attr, ...content){
    var attrs = ''
    var guts = ''

    if ($.isPlainObject(attr)){
        for (var X in attr){
            attrs += `${X}="${attr[X]}"`
        }
    } else {
        guts = parseChildren(attr)
    }

    return `<${name} ${attrs}>${parseChildren(guts)}${parseChildren(content)}</${name}>`
}

function a(href, ...content){
    var href = href || ''

    return tag('a', {href:href}, content)
}

function div(){
console.log(arguments)
    return tag('div', arguments)
}

function footr(){
    return `<footer>${parseChildren(arguments)}</footer>`
}

function h1(){
    return `<h1>${parseChildren(arguments)}</h1>`
}

function header(){
    return `<header>${parseChildren(arguments)}</header>`
}

function hr(){
    return '<hr/>'
}

function img(src,alt){
    return `<img src="${src}" alt="${alt}">`
}

function li(){
    return `<li>${parseChildren(arguments)}</li>`
}

function nav(){
    return `<nav>${parseChildren(arguments)}</nav>`
}

function ul(){
    return `<ul>${parseChildren(arguments)}</ul>`
}
