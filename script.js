function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

function mudarTema() {
    const body = document.body;
    const relogio = document.querySelector('.relogio');
    const botaoTema = document.getElementById('mudarTema');
    
    const temaAtualClaro = body.classList.contains('light-theme');

    if (temaAtualClaro) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        relogio.style.color = 'white'; // Altere a cor do texto do relógio para branco no tema escuro
        botaoTema.textContent = '🌙'; // Altere o emoji para o sol no tema escuro
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        relogio.style.color = 'black'; // Altere a cor do texto do relógio para preto no tema claro
        botaoTema.textContent = '☀️'; // Altere o emoji para a lua no tema claro
    }
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
