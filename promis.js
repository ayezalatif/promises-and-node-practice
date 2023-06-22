// let complete=true;
function prom(complete){
    return new Promise(function(res,rej){
       setTimeout(()=>{
        if (condition) {
            res("i am successful");
        }else{
       rej("i am failed");
        }
       }, 1000)
    });
}
prom(true).then((result)=>{
    console.log(result)
}).catch((result)=>{
            console.log(result)
    })