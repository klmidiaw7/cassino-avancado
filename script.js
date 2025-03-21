// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA-API-KEY",
    authDomain: "seu-app.firebaseapp.com",
    projectId: "seu-project-id",
    storageBucket: "seu-app.appspot.com",
    messagingSenderId: "seu-sender-id",
    appId: "seu-app-id"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

let saldo = 100;

// Função para atualizar o saldo
function atualizarSaldo() {
    document.getElementById("saldo").innerText = saldo;
}

// Função para mostrar o jogo selecionado
function showJogo(jogo) {
    let jogos = document.querySelectorAll('.jogo-section');
    jogos.forEach(jogoElement => {
        jogoElement.style.display = 'none';
    });
    document.getElementById(jogo).style.display = 'block';
}

// Função para iniciar o jogo Crash
function startCrash() {
    let aposta = 10; // Exemplo de valor de aposta
    saldo -= aposta;
    atualizarSaldo();
    alert("Iniciando o jogo Crash!");
    // Lógica do jogo...
}

// Função para adicionar saldo
function adicionarSaldo() {
    saldo += 50;
    atualizarSaldo();
    alert("Saldo adicionado!");
}

// Função de autenticação de login anônimo
function loginAnonimo() {
    auth.signInAnonymously()
        .then(() => {
            console.log("Usuário logado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao logar", error);
        });
}

// Chama a função de login ao carregar a página
window.onload = loginAnonimo;