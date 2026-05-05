const NavManager = {
    init() {
        this.menu = document.getElementById("mobile-menu");
        this.links = document.querySelector(".nav-links");
        this.navItems = document.querySelectorAll(".nav-item");

        this.menu.addEventListener("click", () => {
            this.menu.classList.toggle("active");
            this.links.classList.toggle("active");
        });

        this.navItems.forEach(item => {
            item.addEventListener("click", () => {
                this.menu.classList.remove("active");
                this.links.classList.remove("active");
            });
        });
    }
};



// Estamos expaandiendo nuestro gestor de la app

const heroManager = {
    init() {
        this.canvas = document.getElementById("particle-canvas");

        if(!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = {x:null, y:null};

        this.resize();
        this.createParticles();

        this.animate = this.animate.bind(this)
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
    },

    resize(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createParticles()
    },

    createParticles() {
        this.particles = [];
        const quantity = window.innerWidth < 768 ? 50 : 100;
        for(let i = 0; i < quantity; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.8, 
                speedY: (Math.random() - 0.5) * 0.8, 
            });
        }
        },
    
    animate() {
        // Si por alguna razón perdemos el contexto
        if(!this.ctx) return;
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.speedX; 
            p.y += p.speedY;
            
            // Rebote simple
            if(p.x > this.canvas.width || p.x < 0) p.speedX *= 1;
            if (p.y > this.canvas.height || p.y < 0) p.speedY *=1;

            // Dibujar punto

            this.ctx.fillStyle = 'rgba(0, 210, 0.5)';
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            //Interacción con mouse: dibujar la linea si esta cerca

            let dx = this.mouse.x - p.x;
            let dy = this.mouse.y - p.y;
            let = distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 150) {
                this.ctx.strokeStyle = `rgba(0,210,255, ${1 - distance/150})`;
                this.ctx.lineWidth = 0.5;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
            }
        });

        requestAnimationFrame(()=> this.animate());
    }
};

document.addEventListener('DOMContentLoaded', () => {
NavManager.init()
heroManager.init()
})