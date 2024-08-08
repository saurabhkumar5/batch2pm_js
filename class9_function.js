

// for(let i = 0; i<=100; i++){

//     for(let i = 0; i<=10; i++){
    
//         console.log(i*2)
//     }
// }


// 1. simple function
// 2. anonymous function
// 3. arrow function
// 4. callback function
// 5. higher order function
// 6.async await function
// 7.callback hell function
// 8. inner-outer function
// 9. self-invoking function
// 10. function hosting



//  1. simple function

    //    function greet(){
    //       console.log("hello good morning");
    //    }
        
    //     greet();
    //     greet();
    //     greet();


    //   function add(){

    //     // let a = 10;
    //     // let b = 20;
    //     // console.log(a+b)

    //     if(41>30){
    //         console.log("hello")
    //     }
    //     else{
    //         console.log("world")
    //     }
    //   }
    //  add()
    //  add()



    // function birthday(a,b,z,y,s){
    //     console.log("happy birtday to you",a,b,z[0],y.place,s)
    // }
    // birthday("chintu","iphone",["dairymilk","5star"],{place:"shimla",mob:456123},true)
    // birthday("chintu",1100,["5star","5star"],{place:"shimla",mob:456123})
    // birthday("pintu","bike",["dairymilk","5star"],{place:"shimla",mob:456123})


    //    function add(number1,number2){
    //        console.log("add",number1+number2)
       
    //    }
    //    add(10,20)
 


    //    function sub(number1,number2){
    //     console.log("sub",number1-number2)
    // }
    // sub(10,20)
    // add(65,23)




    function table(a){
        for(let i = 0; i<=10; i++){
            console.log(i*a)
        }
    }


   for(let i = 0; i<=10; i++){
          table(i)
   }