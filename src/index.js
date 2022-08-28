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

//async and await
const getData = async () => {
    const req = await fetch('https://pie.dev/get');
    if(req.ok === false){
        return console.log('gagal lagi sob');
    } else {
        const res = await req.json();
        console.log(res);
    }
    // try {
    //     const res = await req.json();
    //     console.log(res);
    // }catch{
    //     console.log('gagal lagi bang');
    // }

}
getData();

//handle form
const form = document.getElementById('form');
const output = document.getElementById('output');
form.addEventListener('submit', (e)=> {
    // const getName = document.getElementById('name').value;
    const image = document.getElementById('file').files[0];
    e.preventDefault();

    output.innerText = "uploading ...";
    // sendToServer({getName});
    sendToServer(image);
});

const sendToServer = async (image) => {
    console.log(image);
    const formData = new FormData();
    formData.append('image', image);
    const req = await fetch('https://pie.dev/post', {
        method: 'POST',
        body: formData
    });
    if(!req.ok) return (output.innerHTML = 'gagal kirim data');
    const res = await req.json();
    // output.innerText = `nama anda ${res.json.getName}`
    output.innerHTML = `<img src="${res.files.image}">`
}
