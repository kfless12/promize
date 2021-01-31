class Promize{
    constructor(executor){
        if(typeof executor != 'function'){
            throw ""
        };
        this.ispromise = true;
        this.exec = executor
        this.value = undefined;
        this.err = undefined;
        this.container = "empty"

     
        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        this.then = this.then.bind(this);
        try{
        executor(this.resolve, this.reject);
        } catch {}

    }
    //the value needs to be pulled out of resolve and saved then the .then will
    //run to create a container and finally we can run the func with the value passed in


    //in function test spec resolve replaces r and is not called until timeout 
    //is completed meaing value isnt passed until after 100ms

    resolve(val){
        this.value = val

        if(this.container != "empty"){
            this.container(this.value)
           
        }
        return undefined
    }
    //same process as resolve
    reject(err){
        this.err = err;
        if(this.container != 'empty'){
            this.container(this.err)
        }
        return undefined
    }

    then(func) {
       //create a container to hold the function then pass to resolve
       //i need to check it the passed in value is already a promise. if
       //it is we need to override the .then to push through the promise straight
       //to the resolve becuase we already reformatted it
       if(this.checkfunc(func)){
           
           return func()
       }
       this.container = func

		return  new Promize(this.exec);
    }
    catch(func){
        if(this.checkfunc(func)){
           
            return func()
        }
        this.container = func
 
         return  new Promize(this.exec);
    }

    checkfunc(val){
        try{
        if(val().ispromise){
            return true
        } 
    } catch{ return false}
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
