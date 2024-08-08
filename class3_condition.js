
// 1. only if
// 2. if-else
// 3. else if
// 4. nested if-else
// 5. switch statement

//    syntax
//    if(condition){
//      //code 
//    }


//   let age = 20;

//   if(age>=18){
//     console.log("you can vote")
//   }else{
//     console.log("you are not eligible for voting")
//   }




// if(12>10){
//     if(88>9){
//         console.log("hello")
//     }else{
//         console.log("world")
//     }
// }else{
//     console.log("byeee")
// }
  


// if(32>32.0){
//     if(41>10){
//         console.log("kullu")
//     }else{
//         console.log("manali")
//     }
// }else{
//     if(12.0>12.56){
//         console.log("shimla")
//     }else{
//         if(10>8){
//             console.log("delhi")
//         }else{
//             console.log("up")
//         }
//     }
// }




// if(10>80){
//     console.log("hello")
// }
// else if(23>100){
//     console.log("kullu")
// }
// else if(63>560){
//     console.log("manali")
// }
// else{
//     console.log("byeee")
// }


// 90+ = A+
// 80-90 = A
// 70-80 = B+
// 60-70 = B
// <60 = fail

let marks = 35;

if(marks>90){
    console.log('A+')
}
else if(marks>80){
    console.log('A')
}
else if(marks>70){
    console.log('B+')
}
else if(marks>60){
    console.log('B')
}else{
    console.log("fail")
}