
/*=========================== cadastro =================================== */
const nomeUsuario = window.document.getElementById('nome');
const idade = document.getElementById('idade');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const senha = window.document.getElementById('senha');

var regNome = new RegExp("[A-z]{3,100}");
var regEmail = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
var regCpf = new RegExp("[0-9]{11}");
var regSenha = new RegExp("^.{6,}$");

let usuarios = [];
let eventos = [];

/*=========================== cadastro =================================== */
function cadastrarUsuario() {
    if (validarUsuario()) {

        let usuario = {
            nome: nomeUsuario.value,
            idade: idade.value,
            cpf: cpf.value,
            email: email.value,
            senha: senha.value
        };

        // Recuperar o array de usuários do Local Storage
        const usuariosStorage = localStorage.getItem('usuarios');
        let usuarios = usuariosStorage ? JSON.parse(usuariosStorage) : [];

        // Adicionar o novo usuário ao array
        usuarios.push(usuario);

        // Salvar o array modificado no Local Storage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert("cadastrado com sucesso");
        window.location.href = "loginUsuario.html";
    } else {
        alert("campo com erro");
    }
}
/* função para validar cliente*/
function validarUsuario() {
    if (regNome.test(nomeUsuario.value) && idade.value > 17 && regCpf.test(cpf.value) && regEmail.test(email.value) && regSenha.test(senha.value)) {
        return true;
    } else {
        return false;
    }
}






/* =============================  login ============================== */

// Evento do botão para obter  os usuarios no localStorage


function login() {
    // Carrega os usuários do localStorage
    const usuariosStorage = localStorage.getItem('usuarios');
    if (usuariosStorage) {
        usuarios = JSON.parse(usuariosStorage);
    }


    const emailLogin = document.getElementById('nomeLogin').value;
    const senhaLogin = document.getElementById('senhaLogin').value;
    let usuarioEncontrado = null;

    for (let index = 0; index < usuarios.length; index++) {

        if (usuarios[index].email === emailLogin && usuarios[index].senha === senhaLogin) {
            usuarioEncontrado = usuarios[index];
            break;
        }
    }
    console.log(usuarioEncontrado);

    if (usuarioEncontrado) {

        alert("Login realizado com sucesso!");
        window.top.location.href = "index.html?email=" + encodeURIComponent(usuarioEncontrado.email);
    } else {
        alert("Email ou senha incorretos");
    }
}







/* =========================== index ============================ */
let nomeEmail = null;

// Verifica se o usuário está logado
function estaLogado() {
    // Verifica se a variável de sessão está definido
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    nomeEmail = urlParams.get('email');

    if (nomeEmail != null) {
        return true;
    } else {
        return false;
    }
}

// Exibe as opções de "Meu Perfil" se o usuário estiver logado
function mostrarOpcoes() {
    const button = document.querySelector('.dropbtn');
    if (estaLogado()) {

        /* dropdown */
        const dropdown = document.getElementById('dropdown');
        if (dropdown) {
            dropdown.style.display = 'inline-block';
        }
        /* btn criar evento  */
        const btnCriarEvento = document.getElementById('button2');
        if (btnCriarEvento) {
            btnCriarEvento.style.display = 'inline-block';
        }
        /* btn criar evento  */
        const btnLogin = document.getElementById('button1');
        if (btnLogin) {
            btnLogin.style.display = 'none';
        }

        /* adicionar o nome do usuario no dropdown */
        const arrayEmail = nomeEmail.split("@");
        const emailNome = arrayEmail[0];
        if (button) {
            button.innerHTML = emailNome;
        }

        /* adicionar email nas tags a */
        /* criar evento */
        const tagAcriaEvento = document.getElementById('tagAcriaEvento');
        if (tagAcriaEvento) {
            tagAcriaEvento.href = `criaEvento.html?email=${encodeURIComponent(nomeEmail)}`;
        }

        /* eventos */
        const tagAEventos = document.getElementById('tagAEventos');
        if (tagAEventos) {
            tagAEventos.href = `eventos.html?email=${encodeURIComponent(nomeEmail)}`;

        }


        /* meus eventos */
        const tagAMeusEventos = document.getElementById('tagAMeusEvento');
        if (tagAMeusEventos) {
            tagAMeusEventos.href = `meusEventos.html?email=${encodeURIComponent(nomeEmail)}`;
        }

        /* meus ingressos */
        const tagAMeusIngressos = document.getElementById('tagAMeusIngressos');
        if (tagAMeusIngressos) {
            tagAMeusIngressos.href = `meusIngressos.html?email=${encodeURIComponent(nomeEmail)}`;
        }
    }


}










/* ==================================== criar evento ================================ */


//criar ingresso
const inputVip = document.getElementById("vip");
const inputMeia = document.getElementById("meia");
const inputInteira = document.getElementById("inteira");
const divVip = document.getElementById("divVip");
const qtdingressoVip = document.getElementById("qtdingressoVip");
const precoVip = document.getElementById("precoVip");
const divMeia = document.getElementById("divMeia");
const qtdingressoMeia = document.getElementById("qtdingressoMeia");
const precoMeia = document.getElementById("precoMeia");
const divInteiro = document.getElementById("divInteiro");
const qtdingressoInteira = document.getElementById("qtdingressoInteiro");
const precoInteiro = document.getElementById("precoInteiro");


//função para mostrar apenas o ingresso que ele escolher a partir do input radio
function criarIngresso() {

    let vip = inputVip.checked;
    let meia = inputMeia.checked;
    let inteiro = inputInteira.checked;
    divVip.style.display = "none";
    divMeia.style.display = "none";
    divInteiro.style.display = "none";
    if (vip === false && meia === false && inteiro === false) {
        alert("ingresso Não Cadastrado");
    }
    if (vip === true) {
        divVip.style.display = "block";
    }
    if (meia === true) {
        divMeia.style.display = "block";
    }
    if (inteiro === true) {
        divInteiro.style.display = "block";
    }

}


// validar para publicar evento 
const nomeDoEvento = window.document.getElementById('nomeDoevento');
const local = document.getElementById('local');
const endereco = document.getElementById('endereco');
const cep = document.getElementById('cep');
const imagem = document.getElementById('imagem');
const descricao = document.getElementById('descricao');
const dataInicio = document.getElementById('dataInicio');
const dataFim = document.getElementById('dataFim');
const horaInicio = document.getElementById('horaInicio');
const horaFim = document.getElementById('horaFim');
const categoria = document.getElementById('categoria');


/* regex */
var regNomeDoEvento = new RegExp("[A-z]{3,30}");
var regLocal = new RegExp("[a-zA-Z0-9\s.,-]+$");
var regCep = new RegExp("^[0-9]{8}$");


//função para validar dados do evento
function cadastrarEvento() {

    if (validarEvento()) {
/* data inicio */;
        const dataInicioValue = dataInicio.value;

        const dia = dataInicioValue.split('-')[2];
        const mes = dataInicioValue.split('-')[1];
        const ano = dataInicioValue.split('-')[0];

        const dataInicioFormatado = `${dia}/${mes}/${ano}`;

        console.log(dataInicioFormatado); // Exibe a data no formato brasileiro (dd/mm/yyyy)

        /* data fim */
        const dataFimValue = dataFim.value;

        const diaFim = dataFimValue.split('-')[2];
        const mesFim = dataFimValue.split('-')[1];
        const anoFim = dataFimValue.split('-')[0];

        const dataFimFormatado = `${diaFim}/${mesFim}/${anoFim}`;

        console.log(dataInicioFormatado); // Exibe a data no formato brasileiro (dd/mm/yyyy)



        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        nomeEmail = urlParams.get('email');

        const reader = new FileReader();
        reader.onload = function () {
            const imageData = reader.result;
            const base64String = btoa(String.fromCharCode(...new Uint8Array(imageData)));


            let evento =
            {
                nomeDoEvento: nomeDoEvento.value,
                local: local.value,
                endereco: endereco.value,
                cep: cep.value,
                imagem: base64String, // você pode armazenar a imagem como um blob
                descricao: descricao.value,
                dataInicio: dataInicioFormatado,
                dataFim: dataFimFormatado,
                horaInicio: horaInicio.value,
                horaFim: horaFim.value,
                categoria: categoria.value,
                ingressos: [], // você pode armazenar os ingressos como um array
                email: nomeEmail
            }
                ;

            // coletar os ingressos
            if (inputVip.checked) {
                evento.ingressos.push({
                    tipo: "Vip",
                    quantidade: qtdingressoVip.value,
                    preco: precoVip.value
                });
            }
            if (inputMeia.checked) {
                evento.ingressos.push({
                    tipo: "Meia",
                    quantidade: qtdingressoVip.value,
                    preco: precoVip.value
                });
            }
            if (inputInteira.checked) {
                evento.ingressos.push({
                    tipo: "Inteira",
                    quantidade: qtdingressoVip.value,
                    preco: precoVip.value
                });
            }

            // Recuperar o array de eventos do Local Storage
            const eventosStorage = localStorage.getItem('eventos');
            let eventos = eventosStorage ? JSON.parse(eventosStorage) : [];

            eventos.push(evento);

            // armazenar o evento no Local Storage
            localStorage.setItem('eventos', JSON.stringify(eventos));

            alert("Evento cadastrado com sucesso");
            window.location.href = "index.html?email=" + encodeURIComponent(nomeEmail);
        };
        reader.readAsArrayBuffer(imagem.files[0]);

    } else {
        alert("Campo com erro");
        return false;
    }
}
/* função para validar cliente*/
function validarEvento() {
    if (nomeDoEvento.value.length > 3  && local.value.length > 3 && endereco.value.length > 5 && cep.value.length > 7) {
        return true;
    } else {
        return false;
    }
}





/* =================== exibir ====================== */
function init() {
    // Chamar a função para exibir os eventos
    // exibirEventos();
    // Chama a função para exibir as opções de "Meu Perfil" ao carregar a página
    mostrarOpcoes();
    // outras funções aqui
}

window.onload = init;