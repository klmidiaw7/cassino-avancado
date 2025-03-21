document.getElementById('play-roulette').addEventListener('click', function() {
    const resultado = Math.random();
    let mensagem = '';

    if (resultado < 0.5) {
        mensagem = "Você perdeu na Roleta!";
    } else {
        mensagem = "Você ganhou na Roleta!";
    }

    document.getElementById('roulette-result').innerText = mensagem;
    
    // Aqui você pode desenhar a roleta em um canvas (exemplo simplificado)
    const ctx = document.getElementById('roulette-wheel').getContext('2d');
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, Math.PI * 2);
    ctx.fillStyle = "#e74c3c";
    ctx.fill();
});
