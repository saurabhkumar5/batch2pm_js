


// https://jsonplaceholder.typicode.com/users

  fetch('https://jsonplaceholder.typicode.com/users')
       .then((value)=>{
            // console.log(value)
            return value.json()
       })
       .then((data)=>{
            //  console.log(data)
             const div = document.getElementById('momo')
             
             data.map((a)=>{
                    let z = document.createElement('div');
                    z.innerHTML = `
                    <h1>${a.name}</h1>
                    <h1>email:${a.email}</h1>
                    `
                    div.appendChild(z)
             })
             
       })