// 1. map function

//    let arr = [10,20,30,40,50,60];
// //    console.log(arr[1])
//          arr.map(function momo(a){
//             //  console.log("hello")
//             console.log(a*2)
//          })


// let arr = [10,20,30,40,50,60];

//          arr.map((a)=>{
//             // console.log(a/2)
//          })


//         let arr = [11,20,30,43,50,60];

//        const z = arr.map((a,b,c)=>{
//         //     console.log(a,b,c)
//         //     return a
//         if(a%2==0){
//                 return a
//         }
//          })
//          console.log(z)



        // 2. filter

        // let arr = [1,12,26,41,32,87,45];

        //    const value  = arr.filter((a,b,c)=>{
        //         //      console.log(a,b,c)
        //         //   return a

        //              if(a%2==0){
        //                 return a
        //              }
        //       })
        //   console.log(value)


//     3. sort function

                // let arr = [10,5,56,32,99,100];

                //  const value = arr.sort((a,b,c)=>{
                //         // console.log(a,b)
                //         return b-a
                //    })
                //    console.log(value)


                // 4. forEach function

                //    let arr = [10,56,12,23,63];
                //  const value = arr.forEach((a,b,c)=>{
                //         // console.log(a,b,c)

                //         return a+1
                //    })
                //    console.log(value)


                // 5. reduce function

                //  const arr = [10,20,45,32,65,22];
                //   const value = arr.reduce((a,b,c,d,e)=>{
                //         // console.log(a,b,c,d)
                //         return a+b
                //     },40)
                //     console.log(value)





        //      setTimeout(()=>{
        //         console.log("hello")
        //      },5000);   


        // setInterval(()=>{
        //         console.log("hello")
        // },2000);

     const arr  = [
                {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
                }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
                }
                },
                {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
                }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
                }
                },
        ]

        console.log(arr[0].name)
        arr.map((a,b)=>{
              console.log(a.name,a.email)
        //        if(b===0){
        //         console.log(a.name)
        //        }
        })
      