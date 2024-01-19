let sliderElement = document.getElementById('slider')
let buttonElement = document.getElementById('button')
let sizePassword = document.getElementById('valor')
let password = document.getElementById('password')
let containerPassword = document.getElementById('container-password')
let charset = 'abcdefghijklmnopqrstuvxwyz1234567890!@'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value
}

function generatePassword() {
    let pass = ''

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass
}

function copyPassword() {
    alert('Senha copiada com sucesso')
    navigator.clipboard.writeText(novaSenha)
}

