// console.log("start")
// for(i=0;i<2000;i++){
//     console.log("result ")
// }
// console.log("end")



// let time=setTimeout( () => {
//         console.log("vero")
//     },4000)


    
//     clearTimeout(time)


// let function1=function(){
//     console.log ("i am function 1")
// }

// let function2=function(){
//     console.log ("i am function 2")
// }
// let function3=function(){
//     console.log ("i am function 3")
// }
// let function4=function(){
//     console.log ("i am function 4")
// }



// console.log(Math.floor(Math.random()*10)+"%")

/*function love() {
    let randomNumber =  Math.floor(Math.random()*100) 

    if (randomNumber >= 70  ) {
        console.log(`your love score is ${randomNumber}: you are compatible`)
    }
    else if (randomNumber >= 60  ) {
        console.log(`your love score is ${randomNumber}: you are  slightly compatible`)
        
    }else if (randomNumber >= 50  ) {
        console.log(`your love score is ${randomNumber}: you are  manageable`)}
     else {
        console.log(`your score is ${randomNumber}: get out `)
    }
    
}
setTimeout(love, 2000 )


function love() {
    let randomNumber =  Math.floor(Math.random()*100) 

    if (randomNumber >= 70  ) {
        console.log(`your love score is ${randomNumber}: you are compatible`)
    }
    else if (randomNumber >= 60  ) {
        console.log(`your love score is ${randomNumber}: you are  slightly compatible`)
        
    }else if (randomNumber >= 50  ) {
        console.log(`your love score is ${randomNumber}: you are  manageable`)}
     else {
        console.log(`your score is ${randomNumber}: get out `)
    }
    
}*/
// setTimeout(love, 2000 )
// function love(){

// let randomNumber =  Math.floor(Math.random()*100) ;
// switch (true) {
//     case( randomNumber >= 70):
//     console.log(`your love score is ${randomNumber}%: you are compatible`)  
        
//         break;
//         case (randomNumber >= 60):
//         console.log(`your love score is ${randomNumber}%: you are slightly compatible`)
            
//             break;
//             case (randomNumber >= 50):
//             console.log(`your love score is ${randomNumber}%: you are manageable`)
                
//                 break;

//     default:
//         console.log(`your love score is ${randomNumber}%: get out`);
// }
// }

// setTimeout(love, 2000);


// function love(){
//     let mrJoseph = Math.floor(Math.random()*100);
//     // console.log(`joseph you have ${mrJoseph}% affection for josephaine`)
//     let missJosephine = Math.floor(Math.random()*100);
//     // console.log(`joseph you have ${mrJoseph}% affection  josephaine`)
//     let total = mrJoseph + missJosephine / 2
//    // console.log(total)
//     // return mrJoseph + missJosephine / 
//     switch (true) {
//         case (total >= 80):
//             console.log(`joseph you have ${mrJoseph}% affection  josephaine`)
//             break;
    
//         default:
//             break;
// }
//     }



//  console.log(love() + "%")
// function love (){
//     let mrJoseph = Math.floor(Math.random()*100);
//     let missJosephine = Math.floor(Math.random()*100);
//     switch (true) {
//         case (mrJoseph  * missJosephine /2):
//             console.log(`joseph you have ${mrJoseph}% affection for josephaine`)
            
//             break;
    
//         default:
//             console.log(`joseph you have ${mrJoseph}% affection  josephaine`)
//             break;
//     }
// }
// love()
// function knowYourLoveScore(person1, person2,callback ) {
//      person1 = Math.floor(Math.random() * 100);
//      person2 = Math.floor(Math.random() * 100);
//       total = (person1 + person2) 
//       callback(person1, person2, total);
//   }
    
//   function displayLoveScore(person1, person2, total) {
//     setTimeout(() => {
//         console.log (`joseph you have ${person1}% affection for josephaine`)
//     }, 2000);
   
//    setTimeout(() => {
//     console.log (`josephine you have ${person2}% affection for joseph`)
// }, 4000);
  

//     const averageScore = (total) /2
//     let advise;
//     switch(true) {
//       case averageScore >70:
//         advise = "you are compactible carry  on!!!.";
        
//         break;
//       case averageScore > 50:
//         advise = "Not too bad,  you are good to go!.";
//         break;
//         case averageScore >30:
//      advise = "not adviseable to continur relagionship XXX";
//       break;
//     default:
//       advise = "you better japa for your life!!!";
//   }
//   setTimeout(() => {
//     console.log(`Your average love score is ${averageScore}%. ${advise}`);
// }, 6000);
  

// }

// knowYourLoveScore("joseph", "josephaine", displayLoveScore);


// function loveScore(person1, person2, callback){
//     person1= Math.floor(Math.random()* 100)
//     person2=Math.floor(Math.random()* 100)
//     total = person1 + person2
//     callback(person1, person2, total)
// }function displayLoveScore(person1, person2, total){
//     console.log(`your love ${person1}`)
//     console.log(`your love ${person2}`)
//     let averageScore = (total) / 2
//     let advice;
//     switch (true) {
//         case averageScore > 70:
//             advice = "carry on"
//             break;
    
//         default:
//             advise = "get out"
//             break;
//     }
//     console.log(`your average score is ${averageScore} ${advise}`)
// }

// loveScore( "tega", "jenny", displayLoveScore)