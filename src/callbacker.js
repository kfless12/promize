const syncCallbacker = (arg1, arg2, ...args) => {
    if(typeof arg1 != 'functiopn' && typeof arg2 != 'function'){
        throw ""
    }
    for(let i = 0; i < args.length; i++){
        if(typeof args != 'function'){
        throw ""}
        }
    let func = arg2(arg1())
    for(let i = 2; i < arguments.length; i++){
        func = arguments[i](func)
    }
    return func
    
};

const asyncCallbacker = (arg1, arg2) => {
    if(typeof arg1 === 'function' && typeof arg2 === 'function'){
        return arg2(arg1());

    } else throw ""};

module.exports = { syncCallbacker, asyncCallbacker };
