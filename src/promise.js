const basicPromise = new Promise((resolve) => {
    resolve("basicPromise")
});

const funcPromise = () => {
    return  new Promise((resolve) => {
        resolve("funcPromise")
    })
};



const chainedPromise = prom =>{  
      
    return Promise.resolve().then(prom)
};


const rejectedPromise = () => {
    let nprom = Promise.reject(new Error("rejectedPromise")).then(function(error){
        throw error
      });
      return nprom
}

module.exports = { basicPromise, chainedPromise, rejectedPromise, funcPromise };
