/*!
 * $modulename
 * Copyright(c) 2019 Stephane Potelle 
 * MIT Licensed
*/

var util = require('util')

function merge(dest, source, createProperties, intersect) {
    if (typeof(source)=='object') {
        for (const k of Object.keys(source)) {
            let d=dest[k];
            if (d != undefined || createProperties) {
                let s=source[k];

                if (typeof(d)==typeof(s) || d ==undefined ) {
                    if (Array.isArray(source[k])) {
                        d=[];
                        for (let i=0; i<s.length; i++) d.push(s[i]);
                        dest[k]=d;
                    } else {
                        dest[k]=s;
                    }
                } 
            }
        }
        if (intersect) {
            for (const k of Object.keys(dest)) {
                if ( source[k] === undefined ) {
                    delete dest[k]
                }
                //    delete dest[k]
            }
        }
        return true;
    } else {
        return false;
    }
}

function clone (v) {
    n = {};
    Object.setPrototypeOf(n,Object.getPrototypeOf(v));
    merge(n,v,true);
    return n;
}


function ESNextFunction(f, obj) {
    const fp = util.promisify(f)
    return function(...args) {
        if (typeof (args[args.length-1])=='function')  
            f.apply(obj, args)
        else 
            return fp.apply(obj, args)
    }
}

exports.merge = merge
exports.clone = clone
exports.ESNextFunction = ESNextFunction






