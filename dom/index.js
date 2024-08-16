// 1. getElementByid

        //   const h1 = document.getElementById('header');
        //   console.log(h1);
        // const button = document.getElementById('btn');
        // console.log(button);
   
//   2. getElementbyTagename   

            //  const header  = document.getElementsByTagName('h1')
            //  console.log(header)

    // 3. getElementByClassName    
              
            // const momo  = document.getElementsByClassName('momo');
            // console.log(momo)


        // 4. querySelector
        
            //   const btn = document.querySelector('#btn')
            // const btn = document.querySelector('.momo')
        //     const btn = document.querySelectorAll('h1')
        //       console.log(btn)

        //  manipulation 

        // const h1 = document.getElementById('header');
        //  console.log(h1)

        //    h1.style.backgroundColor = "yellow";
        //    h1.style.color = "red"
        //    h1.style.textAlign = "center"
        //    h1.style.height = "100px"
        //    h1.innerHTML = "most welcome"
        //    h1.classList.add('momo');


        // createElement

        // const a = document.createElement('h1')
        //      a.innerHTML = "hello i love coding"
        //      console.log(a)

        //      const div = document.querySelector('.momo');
        //            div.appendChild(a);
        //            console.log(div)

        //         const p  = document.createElement('p')
        //               p.innerHTML = "kullu manali shimla"
        //               console.log(p)
        //               div.appendChild(p)



        // const h1 = document.querySelector('h1');
        // const btn = document.querySelector('button');
        // // console.log(h1)
        // // console.log(btn)
        // let a = true;
        // btn.addEventListener('click',()=>{
                // h1.style.backgroundColor = 'yellow'
                // h1.style.color = 'red'
                // h1.style.textAlign = 'center'

        //         if(a){
        //         h1.style.backgroundColor = 'yellow'
        //         h1.style.color = 'red'
        //         h1.style.textAlign = 'center'
        //         }else{
        //          h1.style.backgroundColor = ''
        //         h1.style.color = ''
        //         h1.style.textAlign = ''
        //         }
        //         a = !a;
        // })



        const img = document.querySelector('#img');
        const btn = document.querySelector('#btn');
        // console.log(img);
        // console.log(btn)

        btn.addEventListener('click',()=>{
                // bulb.src = './bulbon.jpg';
                // console.log(bulb.src)

                if(img.src.match('off')){
                        img.src = './bulbon.jpg'
                }else{
                         img.src = './bulboff.jpg'
                }
        })