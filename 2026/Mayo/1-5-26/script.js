// --- GESTOR DE NAVEGACIÓN ---
const NavManager = {
    init() {
        this.menu = document.getElementById('mobile-menu');
        this.links = document.querySelector('.nav-links');
        this.navItems = document.querySelectorAll('.nav-item');

        if (!this.menu) return;

        this.menu.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            this.links.classList.toggle('active');
        });

        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                this.menu.classList.remove('active');
                this.links.classList.remove('active');
            });
        });
    }
};

// --- GESTOR DE PARTÍCULAS (HERO) ---
const HeroManager = {
    init() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };

        this.resize();
        this.createParticles();
        
        // --- LA CORRECCIÓN CLAVE ---
        // Usamos bind(this) para que 'animate' siempre sepa quién es el dueño del ctx
        this.animate = this.animate.bind(this);
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    },

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles();
    },

    createParticles() {
        this.particles = [];
        const quantity = window.innerWidth < 768 ? 40 : 80;
        for (let i = 0; i < quantity; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.8,
                speedY: (Math.random() - 0.5) * 0.8
            });
        }
    },

    animate() {
        // Si por algún motivo el contexto no está, salimos para evitar el error de la foto
        if (!this.ctx) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x > this.canvas.width || p.x < 0) p.speedX *= -1;
            if (p.y > this.canvas.height || p.y < 0) p.speedY *= -1;

            this.ctx.fillStyle = 'rgba(0, 210, 255, 0.3)';
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            let dx = this.mouse.x - p.x;
            let dy = this.mouse.y - p.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                this.ctx.strokeStyle = `rgba(0, 210, 255, ${1 - distance/150})`;
                this.ctx.lineWidth = 0.5;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
            }
        });

        requestAnimationFrame(this.animate);
    }
};

// SECCIÓN DE TARJETAS

const TiltManager = {
    init() {
        this.cards = document.querySelectorAll(".service-card");

        // console.log("Tarjetas encontradas:", this.cards.length);
        
        if(this.cards.length > 0) {
            this.addEventListeners();
        }
    },

    addEventListeners() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleMove(e, card))
            card.addEventListener('mousemove', () => this.handleLeave(card))
        });
    },

    handleMove(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X dentro de la tarjeta
        const y = e.clientY - rect.top; // Posición Y dentro de la tarjeta

        const centerX = rect.width /2;
        const centerY = rect.height /2;

        // Calculamos la rotación (mínimo 15 grados)
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * -15;

        card.style.transition ="none"
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },

    handleLeave() {
        // Al salir, vuelve a su posición original suavemente
        
        card.style.transition = "transform 0.6s ease";
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;

        // Limpiamos el transition después para que el movimiento sea fluido al volver a entrar
        setTimeout(()=> {
            card.style.transition = "none";
        }, 500)
    }
};

// SECCIÓN PORTFOLIO

const PortfolioManager = {
    init() {
        this.cards = document.querySelectorAll(".project-card");
        this.revealOnSroll();
    },

    revealOnSroll() {
        const observar = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, {threshold: 0.1});

        this.cards.forEach(card => {
            card.style.opacity  ="0";
            card.style.transform = "translateY(50px)";
            card.style.transition = "all 0.6s ease-out"

            observar.observe(card)
        });
    }
};

// TESTIMONIALS

const TestimonialsManager = {
    data: [
        {name: "Roberto Gomez", job: "CEO en TechFlow", text: "El trabajo de Leo superó nuestras expectativas. La web es rápida y el diseño es increíble"},
        {name: "Lucía Pérez", job: "Founder de CreativeLab", text: "Excelente comunicación y resultados profesionales. Muy recomendado para proyectos modernos."}, 
        {name: "Marcos Díaz", job: "Director de Innova", text: "Las particulas y animaciones le dieron a mi marca ese toque futurista que buscaba."}
    ],

    currentIndex: 0,

    init() {
        this.box = document.getElementById("testimonial-box");
        this.btnPrev = document.getElementById("prev-test");
        this.btnNext = document.getElementById("next-test");

        if (!this.box) return;

        this.btnNext.addEventListener("click", () => this.change(1))
        this.btnPrev.addEventListener("click", () => this.change(-1));

        this.render();
    },

    change(direction) {
        this.currentIndex += direction;

        // Efecto circular (si llega al final vuelve al principio)

        if(this.currentIndex >= this.data.length) this.currentIndex = 0;
        if(this.currentIndex < 0) this.currentIndex = this.data.length -1;

        this.render();
    },

    render() {
        const item = this.data[this.currentIndex];

        // Animmación de salida y entrada simple

        this.box.style.opacity = "0";
        this.box.style.transform = "translateX(20px)";

        setTimeout(()=> {
            this.box.innerHTML = `
            
                <div class="testimonial-card">
                    <p>${item.text}</p>
                    <h4> - ${item.name} </h4>
                    <span>${item.job}</span>
                </div>
            `;
            this.box.style.opacity = "1";
            this.box.style.transform = "translateX(0)"
        },300)
    }
}

// --- ARRANQUE ---
document.addEventListener('DOMContentLoaded', () => {
    NavManager.init();
    HeroManager.init();
    TiltManager.init(); 
    PortfolioManager.init();
    TestimonialsManager.init();
});


