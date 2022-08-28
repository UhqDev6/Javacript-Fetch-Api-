//fetch

//this is request
const request = fetch('https://pie.dev/post', {
    method: "POST",
    headers: {
        Authentication: 'uhqdev 760402060698',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'ulhaq',
        age: 24
    })
})
    .then((request)=> {
        if(request.ok === false) {
            throw new  Error("gagal");
        }else{
            return request.json();
        }
    }).then((request)=> {
        console.log(request);
    })


const res = fetch('https://pie.dev/get')
    .then((res)=> {
        return request.json();
    })
    .then((res)=> {
        console.log(res);
    })
    .catch(()=> {
        console.log('error bagng')
    })

