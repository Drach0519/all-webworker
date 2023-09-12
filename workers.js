
function rendomNumber(){
    let a =0;
    postMessage(a);
    setTimeout(function(){
        a= Math.ceil(Math.random()*(10-0+1)*100);
    })
}
rendomNumber()