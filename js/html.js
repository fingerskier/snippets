function getScript(URL){
    var scriptThing = document.createElement('script');

    scriptThing.setAttribute('src',URL);

    document.head.appendChild(scriptThing);
}

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

function html_tag(tagName){
    var _selfClosers = [
        'area',
        'base',
        'br',
        'hr',
        'img',
        'input',
        'link',
        'meta',
        'param',
        'track',
        'wbr',
    ]

    return function tag(attr){
        var attr = attr || {}
        var attrs = ''

        if ($.isPlainObject(attr)){
            for (var X in attr){
                if (attr[X]){
                    attrs += `${X}="${attr[X]}" `
                } else {
                    attrs += ` ${X} `
                }
            }
        } else {
            attrs = parseChildren(attr)
        }

        return function renderer(...children){
            if (_selfClosers.includes(tagName)){
                return `<${tagName} ${attrs}/>${parseChildren(children)}`
            } else {
                return `<${tagName} ${attrs}>${parseChildren(children)}</${tagName}>`
            }
        }
    }
}

var html_proxy = {
    get(target, name){
        return name in target ? target[name] : html_tag(name);
    }
}

var html = new Proxy({}, html_proxy);
