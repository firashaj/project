
     // //if statement

// let country="eest"

// if (country=="taraji") {

//     console.log("taraji")
// }

// else if (country=="ca"){
//     console.log("ca")
// }

// else if (country=="ess"){
//     console.log("ess")

// }
// else {
//     console.log("nothing")
//}

     // switch 
// let country="ess"

// switch (country){
//     case "est":
//         console.log("est") 
//         break
//     case "ca" :
//         console.log("ca")
//         break
//     case "ess":
//         console.log("ess")      
//         break 

//     default:
//         console.log("anything")
        
// }
// console.log("end of the block")


// loop
// for (var i=0 ; i<=10 ; i++) {

//     console.log(`firas ${i}`)
    

// }

// console.log ("end of loop",i)

// let i=0
// while(i<100) {
//     console.log("amouna",i)
//     console.log("" )
//     i++
// }
// console.log(i)

// let lamia=0
// // do{
// //     console.log("lamia")
// //     lamia++
// // }
// // while (lamia=0)

// while(lamia<100){
//     console.log("sadok",lamia)
//     console.log("")
//     lamia++
// }
// console.log(lamia)

// for (var i=0; i<10 ; i++) {

    
//     if(i==5){
//         break 
        
//     }
    
// }
// console.log("end loop",i)



// function sum(x,y){
//      return x+y
// }
// function sub(x,y){
//     return x-y
// }
// function mul(x,y){
//     return x*y
// }


// let reslsum = sum (30,30)
// let reslsub = sub (30,30)
// let reslmul = mul (30,30) 

// console.log(reslsum)
// console.log(reslsub)
// console.log(reslmul)

//  function anyfunction(){
//          return function(x,y){
//              console.log(x+y)
//          }
//  }

//  let reslt = anyfunction()
// reslt(3,4)

//  let sum=(x,y) => {
//      console.log("asba")
//      console.log(x+y)
//      console.log(x*y)
//  }
// sum (13,10)


// function returnobj(){
//     return{
//         firstname:"firas",
//         lastname:"haj",
//         country:"nabeul"
//     }
    
// }
// console.log(returnobj())

// let profil ={
//     firstname:"firas",
//     lastname:"haj",
//     country:"nabeul"

// }
// let profil2=profil
// console.log(profil2)

// profil.speciality="develloper";

// console.log(profil2)


// let profil={
//     firstname :"lamia",
//     lastname  :"moussa",
//     country   :"tunisia",
//     phone     : 27607525,
//     adress    :"rue korba"
// }

//  for (key in profil){
//     console.log(key + " "+ profil [key])
//      console.log("")
// }


//  let profil={
//          firstname :"lamia",
//          lastname  :"moussa",
//          country   :"tunisia",
//         phone     : 27607525,
//         adress    :"rue korba",
//  hello(){
//      console.log("say hello")  
//      console.log(this.firstname+this.phone)
//  }
//  }
//  profil.hello()
     
    //factory**********************
// function person(name,las,coun,pho,adr) {
//     return{
//         firstname :name,
//         lastname  :las,
//         country   :coun,
//          phone    :pho,
//          adress   :adr,
//     }
// }
// let student=person("fir","aj","bk",27,"rue")
// console.log(student)

 

       //custructor**********************
// function person(name,las,coun,pho,adr) {

//         this.firstname=name
//         this.lastname=las
//         this.country=coun
//         this.phone =pho
//         this.adress=adr
//     }

// let student=new person("fir","aj","bk",27,"rue")
// console.log(student)

// let nam="amouna"
// console.log (nam.charAt(3))


// let nam="aMoUna"
// console.log (nam.toUpperCase())

// let nam="aMoUna"
// console.log (nam.length)

// let nam="aMoUna"
// console.log (nam.indexOf("o"))

// let nam="amouna firas lamia"
// console.log (nam.includes("ou"))

// let nam="amouna firas lamia"
// console.log (nam.startsWith("amouna"))

// let nam="amouna firas lamia"
// console.log (nam.endsWith("ia"))

// let nam="amounafiras"
// console.log (nam.slice(4,6))

// let nam="amouna firas lamia"
// console.log (nam.substring(2,3))

// let nam="amouna firas lamia"
// console.log (nam.substr(7,5))

// var str1="firas"
// var str2="marcelo"
// res=str2.concat(str1)
// console.log(res)


// let nam="amouna firas lamia"
// console.log (nam.charCodeAt(0))



// function getprofile(p){

//      var name=p.firstname
//      var last=p.lastname

//      console.log(name)
//      console.log(last)
// }
// getprofile({
//      firstname:"firas",
//      lastname:"marcelo"
// })

// let profil=["firas","haj","rue korba","27172231"]
// console.log(profil[2])


// let profil=new Array()
// profil=["firas","haj","rue korba","27172231"]
// console.log(profil)

// ********array*******

// arrayString=["firas","haj","rue korba","beni khalled"]
// arrayNumber=[1,2,9,9,4,7,2,8,3,9,2,8]
// arrayBoolean=[false,true,true,false,false]
// arrayObject=[{x:5,y:9},{first:"firas",last:"marcelo"},{verif:true,verif1:false}]
// arrayFunction=[function hello() { return 10 }, function welcome(x,y){ return `"rassil" ${x} ${y}`}]

// arrayString[1]="marcelo"
// console.log(arrayString)
// console.log(arrayNumber)
// console.log(arrayBoolean)
// console.log(arrayObject[1].last)
//  console.log(arrayFunction[1](5,6))

// ********arraymethod*******
// arrayString=["firas","haj","rue korba","beni khalled"] yzidlk mlkhr 
// arrayString.push("27607525")
// console.log(arrayString)


//  arrayString=["firas","haj","rue korba","beni khalled"] nshift yzidlk mloul
//  arrayString.unshift("develloper")
//  console.log(arrayString)

// arrayString=["firas","haj","rue korba","beni khalled"]
// console.log(arrayString.pop())

// arrayString=["firas","haj","rue korba","beni khalled"]
// console.log(arrayString.shift())


//  arrayString=["firas","haj","rue korba","beni khalled"]
//  arrayString.splice(0,1)
//  console.log(arrayString)

//  arrayString=["firas","haj","rue korba","beni khalled"]
//  let secArr=arrayString.slice(0,1)
//  console.log(secArr)

// arrayString=["firas","haj","rue korba","beni khalled"]
// let secArr = arrayString.concat("arbi","sassia")
// console.log(secArr)


// arrayString=["firas","haj","rue korba","beni khalled"]
// for (let i=0; i < arrayString.length; i++) {
//      console.log(arrayString[i],i)
// }


// arrayString=["firas","haj","rue korba","beni khalled"]
// arrayString.forEach((item,index,array) => {
//      console.log(array)
// });


// arrayString=[
//      {firstname:"firas",lastname:"haj",country:"tunisie"},
//      {firstname:"leo",lastname:"messi",country:"argentina"},
//      {firstname:"cristiano",lastname:"ronaldo",country:"portugal"}
// ]

// var val=arrayString.find((item)=> item.country=="argentina");
// console.log(val)


// arrayString=[
//      {firstname:"firas",lastname:"haj",country:"tunisie"},
//      {firstname:"leo",lastname:"messi",country:"argentina"},
//      {firstname:"cristiano",lastname:"ronaldo",country:"portugal"}
// ]

// var val=arrayString.filter((item)=> item.lastname=="messi");
// console.log(val)


// arrayNum=[33,15,32,17]
// let val=arrayNum.filter((item) => item>20);
// console.log(val)



// arrayString=[
//      {firstname:"firas",lastname:"haj",country:"tunisie"},
//       {firstname:"leo",lastname:"messi",country:"argentina"},
//       {firstname:"cristiano",lastname:"ronaldo",country:"portugal"}
//       ]
//  var val=arrayString.map((item)=> item.lastname);
// console.log(val)


// arrayNum=[3,5,8,7,9]
// console.log(arrayNum.sort())

// arrayNum=[3,5,8,7,9]
//  console.log(arrayNum.reverse())


// arrayString=[
//          {firstname:"firas",lastname:"haj",country:"tunisie"},
//            {firstname:"leo",lastname:"messi",country:"argentina"},
//            {firstname:"cristiano",lastname:"ronaldo",country:"portugal"}
//            ]
//       var val=arrayString.reverse()
//         console.log(val)



// arrayNum=[3,5,8,7,9]
//  console.log(arrayNum.join(""))


// arrayString=[
//            {firstname:"firas",lastname:"haj",country:"tunisie"},
//        {firstname:"leo",lastname:"messi",country:"argentina"},
//     {firstname:"cristiano",lastname:"ronaldo",country:"portugal"}
//        ]
//   var val=arrayString.join("")
//     console.log(val)


// numberArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var arr=[]
// numberArray.forEach(element => {
//      arr.push(++element)
// });
// console.log(numberArray)
// console.log(arr)



// numberArray=[1,2,3,4,5,6,7,8,9,10]
// var arr=numberArray.map((element) => { return ++element})
// console.log(arr)



// numberArray=[1,2,3,4,5,6,7,8,9,10]
// var arr=numberArray.reduce((x,y) => x+y)
// console.log(arr)



// map=new Map()
// map.set(1,"firas")
// map.set("1","haj")
// console.log(map.get(1))
// console.log(map.get("1"))
// console.log(map.has(1))
// console.log(map.size)




//  var set=new Set()

//  set.add("firas")
//  set.add("marcelo")
//  set.add("taraji")
//  console.log(set.size)
//  set.delete("firas")
//  console.log(set.has("marcelo"))
//  set.clear()
//  set.forEach(element => {
//       console.log(element)
//  }); 


// var set=new Set(["firas","haj","marcelo"])
// console.log(set.size)
// set.delete("firas")
// console.log(set)
// console.log(set.size)
// set.forEach(element => {
//    console.log(element)  
// });

// let val=["ronaldo","messi","salah","neymar"]
// val.forEach(element => {
//      console.log(element)
// });
// console.log(Array.isArray(val))


// let profil={
//      1:"firas",
//      2:"lamia",
//      3:"marcelo"
// }
// console.log(Array.isArray(profil))


// var date= new Date()
// console.log(date.getMonth()+1)
// console.log(date.getFullYear())
// console.log(date.getDate())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// var date=new Date(Date.now())
// console.log(date)


// let Profile={
//      firstname:"firas",
//      lastname:"haj",
//      website:"www.fm12.com"
// }
//  var info={
//       x:100,
//       y:200
//  }
//  Profile._proto_=info
//  console.log(Profile)

// class car {
//      constructor(col,comp,mod){
//         this.color=col
//         this.company=comp
//         this.modele=mod
//      }
//      print(){
//           console.log(this.color+" "+this.company+" "+this.modele)
//      }
// }
// var c1=new car("red","toyota","firas")
// var c2=new car("green","ford","haj")  
// var c3=new car("blue","clio","haj")


// console.log(c3.print())


//  class real{
//       constructor(def,mil,att){
//            this.deffence=def
//            this.millieu=mil
//            this.attaque=att
//       }
//  }
//  class barca extends real{
//       constructor(ter,pub,...args){
//       super(...args)  
//       this.terrain=ter
//       this.public=pub   
//       }     
//  }
//  var c1=new real("marcelo","kroos","benzema")
//  var c2=new barca("campnow",55000,"alba","busquets","depay")
//  console.log(c2.deffence+" "+c2.millieu+" "+c2.attaque)
//  console.log(c2.public)
//  console.log(c2.terrain)



//*****assunrouns function */
// setTimeout((frer1,frer2) => {
//      console.log("lamia"+" "+frer1+" "+frer2)
// },3000,"amouna","omar");

// console.log("moussa")

// setInterval(() => {
//      console.log("lamia moussa")
//      console.log("")
// },1000);
// console.log("firas hadj")



/**********promis******* */
// var mypromis =new Promise((resolve,reject)=>{
//      resolve("done")
//      reject("error")
// })
// mypromis.then((msj)=>console.log(msj))
// mypromis.catch((err)=>console.log(err))



// var mypromis =new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("firas marcelo")
//         resolve("done")
//         reject("error")
//      },2000);     
// })
// mypromis.then((msj)=>{
//      console.log(msj)
//      console.log("from then")})

// mypromis.catch((err)=>{
//      console.log(err)
//      console.log("from catch")})




// var promis=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//          resolve(10)
//     }, 2000);
// })
// async function myf(){
//      var val=await promis.then((msj)=>(msj))
//      console.log("result ="+" "+val)
//      console.log("firas marcelo")
// }
// myf()

/**********erer*********** */
// try{
//      console.log("gomycode.com")
//      var x=5
//      resl=x/0
//      console.log(resl)

// }catch(msj){
// console.log(msj)
// }

/**********json***** */
// let profil={
//      firstname:"firas",
//      lastname:"marcelo",
//      country:"nabeul"
// }
// let res=JSON.stringify(profil)
// console.log(res)
// let profil1=`{"firstname":"firas","lastname":"marcelo","country":"nabeul"}`
// let res1=JSON.parse(profil1)
// console.log(res1)



// let marks = prompt()
// let result=marks
// if (marks>=40) {
//      console.log("you pass the exam")
// }
// else{
//      console.log("you fail the exam")
// }

// JavaScript (ES5)
function multiply() { return 2 * 3; };
// ES6
// const multiply= () => { return 2 * 3 };