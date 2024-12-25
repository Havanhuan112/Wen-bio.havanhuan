// Particles Effect
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = "#00ff00";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    particlesArray.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) particlesArray.splice(index, 1);
    });
}

function createParticles() {
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    createParticles();
    requestAnimationFrame(animate);
}

animate();

// Time Display
function updateTime() {
    const timeElement = document.getElementById("time");
    const date = new Date();
    timeElement.innerHTML = date.toLocaleTimeString();
}

setInterval(updateTime, 1000);

// Close Button Functionality
document.getElementById("close-btn").addEventListener("click", () => {
    document.querySelector(".menu").style.display = "none";
});