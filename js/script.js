document.addEventListener('DOMContentLoaded', function() {
    // Efecto de carga suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);

    // Animación de elementos al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-category, .experiencia-item, .proyecto, .educacion-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Configuración inicial para animaciones
    const setupAnimations = () => {
        const animatedElements = document.querySelectorAll('.skill-category, .experiencia-item, .proyecto, .educacion-item');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        // Forzar un reflow para que las animaciones funcionen correctamente
        void document.body.offsetWidth;
        
        // Mostrar elementos del encabezado con retraso
        const headerElements = document.querySelectorAll('.hero h1, .hero p, .nav-links li');
        headerElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 200 * (index + 1));
        });
    };

    // Efecto de hover mejorado para tarjetas
    const setupHoverEffects = () => {
        const cards = document.querySelectorAll('.skill-category, .experiencia-item, .proyecto');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    };

    // Navegación suave
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Efecto de escritura en el título
    const typeWriter = () => {
        const titleElement = document.querySelector('.hero h1');
        if (!titleElement) return;
        
        const text = titleElement.textContent;
        titleElement.textContent = '';
        let i = 0;
        
        const type = () => {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        };
        
        type();
    };

    // Inicialización
    setupAnimations();
    setupHoverEffects();
    setupSmoothScroll();
    typeWriter();
    
    // Configurar el evento de scroll
    window.addEventListener('scroll', animateOnScroll);
    // Ejecutar una vez al cargar
    animateOnScroll();
});
