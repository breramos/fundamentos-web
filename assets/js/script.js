/*  Variáveis de escopo global */

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");

let nomeOk = false;
let emailOk = false;

const cep = document.querySelector("#cep");

//document = biblioteca de funções do JS
//querySelector = consultar o seletor
//armazenando na constante nome o que tem dentro da div específica

function validarNome () {
    //Variável de escopo local = só funciona dentro do método que ela foi criada
    let txtNome = document.querySelector("#txtNome");
        if( nome.value.length < 3 ) {
            txtNome.innerHTML = "Nome digitado tem menos de 3 caracteres!"
            txtNome.style.color = "red"
        } else {
            txtNome.innerHTML = "✔"
            txtNome.style.color = "green"

        }

}


function validarEmailRegEx(){
    
    let regex = /^\w+([.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.match(regex)) {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    } else {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    }
}


function enviarFormulario () {

    if(nomeOk === true && emailOk === true) {

        alert(nome.value + ", obrigado pela sua mensagem :D")
    }else {
        alert("Por favor, pressione o botão enviar!")
    }

}


function consultarCep() {
    // concatenar variável com string
    console.log(cep.value)
    const url = `https://viacep.com.br/ws/${cep.value}/json`
    fetch (url)
    .then((response) => response.json ())
    .then((jsonBody) => {
        document.getElementById("endereco").innerHTML = 
        jsonBody.logradouro + "\n" + jsonBody.bairro + "\n" + jsonBody.localidade + "\n" + jsonBody.uf

    })
    .catch((error) => {

        alert("CEP não encontrado")
    })

}



/* Primeira possibilidade de validção do email  
    -1 = significa que ele não encontrou
    indexOf vai procurar na caixa de texto a string que foi passada dentro do parênteses */

function validarEmail () {

    let txtEmail = document.querySelector("#txtEmail");
        if( email.value.indexOf ("@") === -1 || email.value.indexOf(".") === -1) {
            txtEmail.innerHTML = "E-mail inválido!"
            txtEmail.innerHTML = "red"
        } else {
            txtEmail.innerHTML = "✔"
            txtEmail.style.color = "green"

        }

}

