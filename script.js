const cronometro = document.getElementById('cronometro');
const frenar = document.getElementById('frenar');
const segundocirculo = document.getElementById('segundocirculo');

let numCronometro;
let tiempo = 0;

const seguir = () => {
    const isPaused = !parar.classList.contains('correr');
    if (isPaused) {
        parar.classList.add('correr');
        iniciar();
    }else {
        parar.classList.remove('correr');
        pausar();
    }
}

const pausar = () => {
    segundocirculo.style.animationPlayState = 'paused';
    clearInterval(numCronometro);
}

const stop = () => {
    segundocirculo.style.transform = 'rotate(-90deg) translateX(60px)';
    segundocirculo.style.animation = 'none';
    parar.classList.remove('correr');
    tiempo = 0;
    clearInterval(numCronometro);
    cronometro.textContent = '00:00'
}

const iniciar = () => {
    segundocirculo.style.animation = 'rotacion 60s linear infinite';
    let time = Date.now() - tiempo;
    segundocirculo.style.animationPlayState = 'correr';
    numCronometro = setInterval( () => {
        tiempo = Date.now() - time;
        cronometro.textContent = calcularTiempo(tiempo);
    }, 1000)
}

const calcularTiempo = tiempo => {
    const segundos_totales = Math.floor(tiempo / 1000);
    const minutos_totales  = Math.floor(segundos_totales / 60);

    const mostrar_segundos = (segundos_totales % 60).toString().padStart(2, "0");
    const mostrar_minutos = minutos_totales.toString().padStart(2, "0");

    return `${mostrar_minutos}:${mostrar_segundos}`
}