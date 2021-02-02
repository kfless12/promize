const promises = []

//The class runs like a semi true promise function. The .then function will
/*create a list which will then run upon the resolution of the first promises.
when another promise is created in the chain the list will break and wait to be
started again buy the execution of that specific promise*/

class Promize{
    constructor(executor){
        if(typeof executor != 'function'){
            throw ""
        };
        this.resolved = false
        this.rejected = false
        this.value = undefined;
        this.err = undefined;

     
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        this.then = this.then.bind(this);
        try{
        let stuff = executor(this.resolve, this.reject);
        } catch {}

    }

    resolve(val){
        if(this.rejected){
            return undefined
        }
        this.value = val
        if(!this.resolved){
            for(let i in promises){
                let run = promises[i]
                try{                
                val = run(val)
                promises[i] = null
                if(val instanceof Promize){
                    break
                }
                }catch{}
            }
            this.resolved = true
        }

        return undefined
    }
    //same process as resolve
    reject(err){
        this.value = err
        if(!this.rejected){
            for(let i in promises){
                let run = promises[i]
                try{                
                val = run(val)
                promises[i] = null
                if(val instanceof Promize){
                    break
                }
                }catch{}
            }
            this.rejected = true
        }
        return undefined
    }
    
    then(func) {
        if(this.resolved){
            func(this.value)
        } else {
            promises.push(func)
        }
        return  new Promize(()=>{});
    }

    catch(func){
        this.rejected = true;
        if(this.rejected){
            func(this.err)
        } else {
            promises.push(func)
        }
        return  new Promize(()=>{});
    }

}







/*
constructor function attempt did not work code saved for personal information purposes
to use as a template for building class 
const Promize = function(executor){
     if(typeof executor != 'function'){
         throw ""
     }

    this.catch = function(func){
        return new Promize(func)
    };
    
    this.then =function(func){        
        return new Promize(func)
      };
    let promise = {resolve: false, reject: false, event: 'test', excution: executor}

    executor(resolve, reject);
    
     
    function resolve(val){
        promise.resolve = true
        return undefined};
     
    function reject(){
        promise.reject = true
        return undefined};
        
}
*/




module.exports = Promize;
