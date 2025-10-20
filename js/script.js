const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');

        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                nav.classList.remove('active');
            }
        });






        //efecto maquina de escribir para HERO
class Typewriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }

    start() {
        this.element.textContent = '';
        this.type();
    }
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('.hero h1');
    
    // Guardar el texto original
    const h1Text = h1.textContent;
    
    // Crear instancias de Typewriter
    const h1Typewriter = new Typewriter(h1, h1Text, 50);
    
    // Iniciar animación del h1
    h1Typewriter.start();

});