
const Promize = function(executor){
     if(typeof executor != 'function'){
         throw ""
     }
     let foo;
     
    function resolve(val){
         foo = val
        return undefined};
     
    function reject(){return undefined};

     executor(resolve, reject);
     this.catch = function(){};

    function resolve(val){
         foo = val
        return undefined};

    this.then = function(func){
        func(foo)
        return new Promize(func)};

    this.catch = function(){};
     
}




module.exports = Promize;
