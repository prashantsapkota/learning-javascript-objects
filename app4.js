
//Spread Operators
// const planets =["Mercury" ,"Venus"];
// const shadowPlanets =["Rahu" ,"Ketu"];

// const allPlanets =[...planets,"Jupiter",...shadowPlanets];
// console.log(allPlanets);

// const [a,b,c,d] =[1,2,3,4];
// console.log(a,b);


function add(a,b,...rest){
 
    var sum=0;
    sum+=a;

    for (let i=0;i<rest.length;i++){
        sum+=rest[i];

    }
    return sum;
}
    console.log(add(1,2,3,4,5,6,7))


