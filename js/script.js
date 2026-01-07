const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove("active");
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
    this.element.textContent = "";
    this.type();
  }
}

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector(".hero h1");

  // Guardar el texto original
  const h1Text = h1.textContent;

  // Crear instancias de Typewriter
  const h1Typewriter = new Typewriter(h1, h1Text, 50);

  // Iniciar animación del h1
  h1Typewriter.start();
});

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. ANIMACIÓN DE ENTRADA (GSAP Reveal) ---
  const tl = gsap.timeline();

  tl.from(".hero-title h1", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  })
    .from(
      ".hero-intro",
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    )
    .from(
      ".info-card",
      {
        x: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );

  // --- 2. PARALLAX EFFECT (Sutil al mover el ratón) ---
  const parallaxElements = document.querySelectorAll(".parallax-el");

  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    parallaxElements.forEach((el) => {
      const speed = el.getAttribute("data-speed");
      gsap.to(el, {
        x: x * speed * 100,
        y: y * speed * 100,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  // --- 3. MODAL LOGIC (Pop-up Form) ---
  const modal = document.getElementById("contact-modal");
  const openBtn = document.getElementById("open-modal-btn");
  const closeBtn = document.getElementById("close-modal-btn");
  const modalContent = document.querySelector(".modal-content");

  // Función Abrir
  openBtn.addEventListener("click", () => {
    gsap.to(modal, {
      duration: 0.5,
      autoAlpha: 1, // Maneja opacity y visibility automáticamente
      ease: "power2.out",
    });
    gsap.to(modalContent, {
      duration: 0.5,
      y: 0,
      ease: "back.out(1.7)", // Efecto rebote sutil
    });
  });

  // Función Cerrar
  function closeModal() {
    gsap.to(modalContent, {
      duration: 0.3,
      y: 50,
      ease: "power2.in",
    });
    gsap.to(modal, {
      duration: 0.4,
      autoAlpha: 0,
      ease: "power2.in",
      delay: 0.1,
    });
  }

  closeBtn.addEventListener("click", closeModal);

  // Cerrar al hacer click fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
