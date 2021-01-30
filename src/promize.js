
const Promize = function(executor){
     if(typeof executor != 'function'){
         throw ""
     }

     executor(resolve, reject);

     this.then =(func)=>{ 
         return new Promize(func)};
         
     this.catch = function(){};
     
     function resolve(val){
        return undefined};

     function reject(){return undefined};


     

     
}




module.exports = Promize;
