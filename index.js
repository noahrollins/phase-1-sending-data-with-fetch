function submitData(name, email){
    const submitDataObj = {
        name: name,
        email: email
    }
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(submitDataObj)
    })
    .then(res => res.json())
    .then((data) => {
        const p = document.createElement('p');
        p.textContent = data.id
        document.body.appendChild(p)
    })
    .catch(function (error){
        const er = document.createElement('p')
        er.textContent = error.message
        document.body.appendChild(er)
    })
}

submitData('john','jd123@gmail.com')
