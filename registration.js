let name = document.getElementById('name-input').value
let password = document.getElementById('password-input').value
let registration_button = document.querySelector('.registratson-button')

function onSubmit (e){
    e.preventDefault()
    console.log(name,password)
    let dataJSON = JSON.stringify({name:name, password});
    document.cookie = `regData=${dataJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
    window.location.href = "/"
}

registration_button.addEventListener('click', onSubmit)

x