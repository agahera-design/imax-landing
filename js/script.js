const contadores = document.querySelectorAll('.contador');
const seccionPruebaSocial = document.querySelector('.prueba-social');

let contadorIniciado = false;

const iniciarContadores = () => {
    contadores.forEach(contador => {
        const objetivo = +contador.getAttribute('data-target');
        let actual = 0;
        const incremento = objetivo / 80;

        const actualizarContador = () => {
            actual += incremento;

            if (actual < objetivo) {
                contador.textContent = Math.floor(actual);
                requestAnimationFrame(actualizarContador);
            } else {
                contador.textContent = objetivo.toLocaleString();
            }
        };

        actualizarContador();
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !contadorIniciado) {
            iniciarContadores();
            contadorIniciado = true;
        }
    });
}, {
    threshold: 0.4
});

observer.observe(seccionPruebaSocial);

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});