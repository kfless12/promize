
const Promize = function(executor){
     if(typeof executor != 'function'){
         throw ""
     }

    this.catch = function(){};
    this.resolve;
     
    function resolve(val){
        return undefined};
     
    function reject(){return undefined};

     executor(resolve, reject);
     this.catch = function(){};

    function resolve(val){
        return undefined};

    this.then = function(func) {
      this.resolve = func;

      return new Promize(func);
    };

     
}





module.exports = Promize;
