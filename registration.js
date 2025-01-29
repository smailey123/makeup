let registration_button = document.querySelector('.registratson-button')

function onSubmit (){
    let name = document.getElementById('name-input').value
    let password = document.getElementById('password-input').value
    console.log(name,password)
    let dataJSON = JSON.stringify({name:name, password});
    document.cookie = `regData=${dataJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
    window.location.href = "https://smailey123.github.io/makeup/index.html"
}

registration_button.addEventListener('click', onSubmit)
