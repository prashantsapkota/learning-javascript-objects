// // //Asynchronous Javascript



// function add(a,b,callback,callback2) {
//     setTimeout(() =>callback(a+b ,callback2),0)
// //TimerApi
// }
// function result(data,callback2){
//     setTimeout(() =>callback2, 0);
//     console.log("result :" +data);
// }
// console.log("hello1");
// console.log("Hello2");
// add(1,2,result );
// console.log("Hello3");



//Promise 


function doSomething(){

return new promise((resolve,reject) => {

// through promise we can work on
//asynchronous;
//network request ,file handling,image processing

    let error =false;

    if (!error){
        resolve("Successfully done");

    }else {
        reject("Error while doing some task");

    }

});
}   
doSomething()
.then((response) =>console.log(response))
.catch((err) =>console.log(err));

