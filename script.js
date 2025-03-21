document.getElementById('play-button').addEventListener('click', function() {
    startGame();
});

function startGame() {
    let resultado = Math.random() * 100;
    let message = '';

    // Decisão do resultado baseado em probabilidade
    if (resultado < 30) {
        message = "Você perdeu! Tente novamente.";
    } else if (resultado < 60) {
        message = "Você ganhou um prêmio pequeno!";
    } else {
        message = "Parabéns! Você ganhou o grande prêmio!";
    }

    // Mostrar mensagem de resultado
    showMessage(message);
    triggerFireworks();
    rotateReels();
}

function showMessage(message) {
    const resultBox = document.getElementById('result-box');
    resultBox.innerText = message;
    resultBox.style.opacity = 1;
    setTimeout(() => {
        resultBox.style.opacity = 0;
    }, 3000);
}

// Função para ativar os fogos de artifício
function triggerFireworks() {
    const fireworks = document.querySelector('.fireworks');
    fireworks.style.opacity = 1;
    setTimeout(() => {
        fireworks.style.opacity = 0;
    }, 5000);
}

// Função para animar a rotação dos caça-níqueis
function rotateReels() {
    const slots = document.querySelectorAll('.slot');
    slots.forEach(slot => {
        slot.style.animation = 'spinReels 2s';
        setTimeout(() => {
            slot.style.animation = '';
        }, 2000);
    });
}
