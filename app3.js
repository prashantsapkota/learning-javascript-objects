//Higher Order Function

//javascript function stored in variable

// var myFunction =function(){
//     console.log("abc")
// }

// myFunction();

function printResult(){
    console.log(value)
}

function add(a,b,fxn){

    let sum =a+b;
    fxn(sum);

}

add(1,2 ,printResult)



