let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulario enviado com sucesso')
    } else {
        alert ('Preencha o formulario corretamente')
    }
}

function mapaZoom (){
   mapa.style.width = '600px'
   mapa.style.height = '400px'
}

function mapaNormal (){
    mapa.style.width = '400px'
   mapa.style.height = '250px'
}