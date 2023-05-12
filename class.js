// function calculatLoveScore(){
//      loveScore1 = Math.floor(Math.random()*100)
//      loveScore2 = Math.floor(Math.random()*100)
//     total = loveScore1 + loveScore2
    
// }   


//     function displayLoveScore(loveScore1, loveScore2, total){

    
//     setTimeout(() =>{
//         console.log(`your love life is ${loveScore1}% `);
//     },2000)
//     setTimeout(() =>{
//         console.log(`your love life is ${loveScore2}%`);
//     },3000)

//     averageScore = (total) / 2;
//     let advice;
//     switch (true) {
//         case averageScore > 70:
//             advice = "you are compactable"
//             break;
//             case averageScore > 60:
//             advice = "you are slightly  compactable"
//             break;
//             case averageScore > 50:
//             advice = "you are managable"
//             break;
    
//         default: 
//         advice = "get out!!!"
//             break;
//     }
//     setTimeout(() =>{
//         console.log(`your average score is  ${averageScore}, ${advice}`)
//     },4000)
   

// }
// calculatLoveScore(calcudisplayLoveScore())
// let joseph=Math.floor(Math.random()*100)
// let josephine=Math.floor(Math.random()*100)
// let average=(joseph+josephine)/2
// console.log(joseph)
// console.log(josephine)
// console.log(average)

// setTimeout(()=>{
//     console.log(kkkkkk)
// },2000)






// setTimeout(()=>{console.log(`Josephine, your love affection is ${josephine}%`)},3000)



// setTimeout(() => {setTimeout(()=>{

//     switch (true) {
        
        
//         case average>70:
//       console.log(`your lovescore is ${average}%:Pls get married`)  
//         break;
//         case average>60:
//             console.log(`your lovescore is ${average}%:Pls get married later`)  
//               break;
//               case average>50:
//                 console.log(`your lovescore is ${average}%:Pls visit a therapist`)  
//                 break;
//                 case average>40:
//                     console.log(`your lovescore is ${average}%:Pls don"t marry`)  
//                       break;
                  


//                       case average<40:
//                         console.log(`your lovescore is ${average}%:Pls break up now`)  
//                           break;
// }   
// },5000)

   
    
// }, 5000);


// console.log("hello")





// const  myschool=["Unilag","Lasu","FCE","The Curve","Yabatech"]


// const myPromise =new Promise((resolve,reject)=>{

// if(myschool.includes("Unilag")){
//     resolve("sucessful")
// }
// else  {
//     reject("failure")
// }
// });45

// myPromise.then( 
//     function(value){
//         console.log(" available")
//     },

// function(error){
//     console.log("unavailable"

//     )
// }
//  );
// myPromise.catch(()=>{
//     console.log("The afore mentioned school is  not available")
// })


// ()=>{
//     console.log(" The afore mentioned school is available")
// }



// const { error } = require("console")
// const fs = require("fs");
//  function theReadFunction(){
//  return new Promise((resolve ,reject)=>{


    
//     fs.readFile("./testFil.txt","utf8",(err,data)=>{
//  if (data) {
//     resolve(data)
//  } else{
//     reject(err)
//  }

 
// })

// })
//  }
// theReadFunction()
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })



 




// const fs = require('fs');

// function readFile(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }




// // Usage
// readFile('./testFil.txt')
//   .then(data => {
//     console.log(data.toString());
//   })
//   .catch(err => {
//     console.error(err);
//   });

//   function loveCaculator() {
//    return new Promise((resolve) =>{
//        man = Math.floor(Math.random()*100);
//       //  woman = Math.floor(Math.random()*100);
//       //  average = man + woman
//       resolve (man)
//       // resolve (average)
//       // console.log(average)
//    })
//   };
//   const doSomething = (a) =>{
//    return new Promise((resolve) =>{
//    const man = a;
//    const woman =Math.floor(Math.random()*100);
//    const average = (man + woman) / 2
//    result={man:a, woman:woman, average:average}
//    resolve(result)
//   });
// }
// const doSomethingElse =(a) =>{
// switch (true) {
//    case (a.average >= 70):
//       return (`man is ${a.man},woman is ${a.woman} ,average is ${a.average}. so compatibile`)
//       case (a.average >= 60):
//       return (`man is ${a.man},woman is ${a.woman} ,average is ${a.average}. so slightly compatibile`)
//       case (a.average >= 50):
//       return (`man is ${a.man},woman is ${a.woman} ,average is ${a.average}.  manageable`)
//       case (a.average >= 40):
//       return (`man is ${a.man},woman is ${a.woman} ,average is ${a.average}. dont marry`)
//    default:
     
//          return (`man is ${a.man},woman is ${a.woman} ,average is ${a.average}. japa`)
      
// }
// }
//  const theRunner= async ()=>{
//    try{
//       let man = await  loveCaculator();
//       let result = await doSomething(man);
//       let theResult = await doSomethingElse(result);
//       console.log(theResult);
//    } catch(error){
//       failureCallback(error)
//    }
//  }

// loveCaculator()

function loveCalculator(person1, person2) {
   const score1 = Math.floor(Math.random() * 100)+1 ; 
   const score2 = Math.floor(Math.random() * 100) +1 ; 
 
   return new Promise((resolve, reject) => {
     if (!person1 || !person2) {
       reject("Please provide two valid names");
     } else {
       const averageScore = Math.round((score1 + score2) / 2);
       resolve(averageScore);
     }
   }).then((averageScore) => {
     let verdict;
     switch (true) {
       case averageScore >= 90:
         verdict = ` ${person1}: ${score1} and ${person2}:${score2} averge score:${averageScore} are meant to be together!`;
         break;
       case averageScore >= 70 :
         verdict = ` ${person1}: ${score1} and ${person2}:${score2},averge score:${averageScore} a good chance!`;
         break;
       case averageScore >= 50 :
         verdict = ` ${person1}:${score1} and ${person2}::${score2},averge score:${averageScore} to make it work.`;
         break;
       default:
         verdict = ` ${person1} and ${person2} are not a good match.`;
         break;
     }
     return verdict;
   });
 }
 
 
 loveCalculator("amaka", "tega")
    .then((verdict) => {
      console.log(verdict);
    })
    .catch((err) => {
      console.error(err);
 });
 