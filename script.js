document.addEventListener('DOMContentLoaded', () => {
    let contador = 0;
    const bacia = document.getElementById('bacia');
    const contadorDiv = document.getElementById('contador');
    const somBacia = document.getElementById('som-bacia');

    const cores = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];

    bacia.addEventListener('click', () => {
        contador++;
        somBacia.currentTime = 0; // Reinicia o som para tocar de novo
        somBacia.play();
        contadorDiv.textContent = `Cliques: ${contador}`;
        contadorDiv.style.color = cores[contador % cores.length];
    });
});
