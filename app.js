//Destructing Assignment

const user ={
  id:5 ,
    name:{
    first:"Apil" ,
    last :"Tiwari"
    },
    profileURL :"https://hd.com/1/a.jpeg"

};
// const id =user ['id'];
// const name =user.name;
// const profileURL =user.profileURL;

// const {id:userID,name:Username ,profileURL,message='Hello'} =user;

// const{name:{first="Prashant"}}=user;
// console.log(first);

// const date =['2021','01','02'];

// const [year,month,day] =date;
// console.log(year,month,day)

const [year , , ,text] =['2021','01','02','abc'];
console.log(year,text)
