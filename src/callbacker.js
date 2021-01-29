const syncCallbacker = (arg1, arg2, ...args) => {
    if(typeof arg1 != 'function' || typeof arg2 != 'function'){
        throw ""
    }
    for(let i = 0; i < args.length; i++){
        if(typeof args[i] != 'function'){
        throw ""}
        }
    let func = arg2(arg1())
    for(let i = 0; i < args.length; i++){
        func = args[i](func)
    }
    return func
    
};

const asyncCallbacker = (arg1, arg2, ...args) => {
    if(typeof arg1 != 'function' || typeof arg2 != 'function'){
        throw ""
    } else{ 
    for(let i = 0; i < args.length; i++){
        if(typeof args[i] != 'function'){
        throw ""}
        }


    // function done(data){
    //         arg2(data, done)
    //         return data
    //         }
    // arg1("str",done)
    
    let count = -1
    function done(data){
        if(count === -1){
            count++
            arg2(data, done)
        } else if(count < args.length){
            count++
            args[count-1](data, done)
        }else return data
    }
    arg1("str",done)
    }
};

module.exports = { syncCallbacker, asyncCallbacker };
