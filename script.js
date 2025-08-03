// Variables globales
let currentSlide = 0;
let isTransitioning = false;
const slides = document.querySelectorAll('.slide');
const navDots = document.querySelectorAll('.nav-dot');
const navArrows = document.querySelectorAll('.nav-arrow');
const totalSlides = slides.length;
let currentLanguage = 'es'; // Idioma por defecto
let hasInteracted = false; // Control de interacción del usuario

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar preloader
    const preloader = document.getElementById('preloader');
    
    // Simular tiempo de carga - aumentado a 3.5 segundos
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 3500);
    
    initializeSlides();
    setupEventListeners();
    setupLanguageSelector();
    setupKeyboardAccessibility();
    createParticles();
    animateOnLoad();

    // Projects Slider Functionality
    let currentProjectIndex = 0;
    let totalProjects = 0;
    let projectSlides = [];
    let projectIndicators = [];

    function initializeProjectsSlider() {
        projectSlides = document.querySelectorAll('.proyecto-slide');
        totalProjects = projectSlides.length;
        
        if (totalProjects === 0) return;
        
        // Create indicators
        createProjectIndicators();
        
        // Set initial state
        updateProjectSlider();
        
        // Add event listeners
        setupProjectSliderEvents();
    }
    
    // Inicializar el slider de proyectos
    initializeProjectsSlider();

    function createProjectIndicators() {
        const indicatorsContainer = document.getElementById('projectIndicators');
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < totalProjects; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'slider-indicator';
            indicator.setAttribute('data-project', i);
            indicator.setAttribute('aria-label', `Proyecto ${i + 1}`);
            indicator.addEventListener('click', () => goToProject(i));
            indicatorsContainer.appendChild(indicator);
            projectIndicators.push(indicator);
        }
    }

    function updateProjectSlider() {
        projectSlides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next', 'prev-2', 'next-2');
            
            if (index === currentProjectIndex) {
                slide.classList.add('active');
            } else if (index === currentProjectIndex - 1 || (currentProjectIndex === 0 && index === totalProjects - 1)) {
                slide.classList.add('prev');
            } else if (index === currentProjectIndex + 1 || (currentProjectIndex === totalProjects - 1 && index === 0)) {
                slide.classList.add('next');
            } else if (index === currentProjectIndex - 2 || (currentProjectIndex === 0 && index === totalProjects - 2) || (currentProjectIndex === 1 && index === totalProjects - 1)) {
                slide.classList.add('prev-2');
            } else if (index === currentProjectIndex + 2 || (currentProjectIndex === totalProjects - 1 && index === 1) || (currentProjectIndex === totalProjects - 2 && index === 0)) {
                slide.classList.add('next-2');
            }
        });
        
        // Update indicators
        projectIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentProjectIndex);
        });
        
        // Update navigation buttons
        const prevBtn = document.getElementById('projectPrevBtn');
        const nextBtn = document.getElementById('projectNextBtn');
        
        if (prevBtn) prevBtn.disabled = totalProjects <= 1;
        if (nextBtn) nextBtn.disabled = totalProjects <= 1;
    }

    function goToProject(index) {
        if (index < 0 || index >= totalProjects || index === currentProjectIndex) return;
        
        currentProjectIndex = index;
        updateProjectSlider();
        
        // Animate content
        const activeSlide = projectSlides[currentProjectIndex];
        if (activeSlide) {
            animateProjectContent(activeSlide);
        }
    }

    function nextProject() {
        const nextIndex = (currentProjectIndex + 1) % totalProjects;
        goToProject(nextIndex);
    }

    function prevProject() {
        const prevIndex = currentProjectIndex === 0 ? totalProjects - 1 : currentProjectIndex - 1;
        goToProject(prevIndex);
    }

    function animateProjectContent(slide) {
        const content = slide.querySelector('.proyecto-content');
        if (!content) return;
        
        // Reset animation
        content.style.animation = 'none';
        content.offsetHeight; // Trigger reflow
        
        // Add entrance animation
        content.style.animation = 'fadeInUp 0.6s ease-out';
    }

    function setupProjectSliderEvents() {
        // Navigation buttons
        const prevBtn = document.getElementById('projectPrevBtn');
        const nextBtn = document.getElementById('projectNextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevProject);
            prevBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    prevProject();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', nextProject);
            nextBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    nextProject();
                }
            });
        }
        
        // Keyboard navigation for projects slider
        document.addEventListener('keydown', (e) => {
            // Only handle project slider keys when on projects slide
            const projectsSlide = document.getElementById('slide-proyectos');
            if (!projectsSlide || !projectsSlide.classList.contains('active')) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    prevProject();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextProject();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToProject(0);
                    break;
                case 'End':
                    e.preventDefault();
                    goToProject(totalProjects - 1);
                    break;
            }
        });
        
        // Touch/swipe support
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        
        const sliderContainer = document.querySelector('.projects-slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isDragging = true;
            });
            
            sliderContainer.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                
                const currentX = e.touches[0].clientX;
                const currentY = e.touches[0].clientY;
                const diffX = startX - currentX;
                const diffY = startY - currentY;
                
                // Only handle horizontal swipes
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    e.preventDefault();
                }
            });
            
            sliderContainer.addEventListener('touchend', (e) => {
                if (!isDragging) return;
                
                const currentX = e.changedTouches[0].clientX;
                const currentY = e.changedTouches[0].clientY;
                const diffX = startX - currentX;
                const diffY = startY - currentY;
                
                // Only handle horizontal swipes
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        nextProject();
                    } else {
                        prevProject();
                    }
                }
                
                isDragging = false;
            });
        }
        
        // Manejar scroll dentro de los cards
        projectSlides.forEach(slide => {
            const content = slide.querySelector('.proyecto-content');
            if (content) {
                content.addEventListener('scroll', (e) => {
                    // Prevenir que el scroll del card interfiera con la navegación
                    e.stopPropagation();
                });
            }
        });
    }

    // Initialize projects slider when DOM is loaded
    initializeProjectsSlider();
});

// Configurar selector de idioma
function setupLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLanguage) {
                changeLanguage(lang);
            }
        });
        
        // Navegación por teclado para botones de idioma
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                if (lang !== currentLanguage) {
                    changeLanguage(lang);
                }
            }
        });
    });
}

// Configurar accesibilidad de teclado
function setupKeyboardAccessibility() {
    // Asegurar que todos los elementos interactivos sean accesibles por teclado
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
    
    interactiveElements.forEach(element => {
        // Asegurar que elementos que no son naturalmente focusables tengan tabindex
        if (element.tagName === 'BUTTON' || element.tagName === 'A') {
            if (!element.hasAttribute('tabindex')) {
                element.setAttribute('tabindex', '0');
            }
        }
        
        // Añadir indicadores de focus visual
        element.addEventListener('focus', () => {
            element.classList.add('keyboard-focus');
        });
        
        element.addEventListener('blur', () => {
            element.classList.remove('keyboard-focus');
        });
    });
    
    // Manejar skip link
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Asegurar que el formulario sea accesible
    const form = document.querySelector('form');
    if (form) {
        const formElements = form.querySelectorAll('input, textarea, button');
        formElements.forEach((element, index) => {
            element.setAttribute('tabindex', index + 1);
        });
    }
}

// Cambiar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        }
    });
    
    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Actualizar todos los elementos con atributos data-es y data-en
    updateTextContent();
    
    // Actualizar placeholders
    updatePlaceholders();
    
    // Actualizar aria-labels
    updateAriaLabels();
    
    // Log del cambio de idioma
    console.log(`🌍 Idioma cambiado a: ${lang === 'es' ? 'Español' : 'English'}`);
}

// Actualizar contenido de texto
function updateTextContent() {
    const elements = document.querySelectorAll('[data-es][data-en]');
    
    elements.forEach(element => {
        const spanishText = element.getAttribute('data-es');
        const englishText = element.getAttribute('data-en');
        
        if (currentLanguage === 'es') {
            element.textContent = spanishText;
        } else {
            element.textContent = englishText;
        }
    });
}

// Actualizar placeholders
function updatePlaceholders() {
    const inputs = document.querySelectorAll('input[data-es-placeholder][data-en-placeholder]');
    const textareas = document.querySelectorAll('textarea[data-es-placeholder][data-en-placeholder]');
    
    [...inputs, ...textareas].forEach(element => {
        const spanishPlaceholder = element.getAttribute('data-es-placeholder');
        const englishPlaceholder = element.getAttribute('data-en-placeholder');
        
        if (currentLanguage === 'es') {
            element.placeholder = spanishPlaceholder;
        } else {
            element.placeholder = englishPlaceholder;
        }
    });
}

// Actualizar aria-labels
function updateAriaLabels() {
    const elements = document.querySelectorAll('[data-es-aria-label][data-en-aria-label]');
    
    elements.forEach(element => {
        const spanishAriaLabel = element.getAttribute('data-es-aria-label');
        const englishAriaLabel = element.getAttribute('data-en-aria-label');
        
        if (currentLanguage === 'es') {
            element.setAttribute('aria-label', spanishAriaLabel);
        } else {
            element.setAttribute('aria-label', englishAriaLabel);
        }
    });
}

// Inicializar slides
function initializeSlides() {
    // Ocultar todos los slides excepto el primero
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
            gsap.set(slide, { opacity: 1, x: 0 });
        } else {
            slide.classList.remove('active', 'prev');
            gsap.set(slide, { opacity: 0, x: '100%' });
        }
    });
    
    // Configurar indicadores de navegación
    updateNavigation();
    
    // Ocultar todos los indicadores de slide y mostrar solo el del primer slide
    const allSlideIndicators = document.querySelectorAll('.slide-indicator');
    allSlideIndicators.forEach(indicator => {
        indicator.style.display = 'none';
    });
    
    const firstSlideIndicator = slides[0].querySelector('.slide-indicator');
    if (firstSlideIndicator) {
        firstSlideIndicator.style.display = 'flex';
    }
    
    // Añadir clases de carga
    slides.forEach(slide => {
        slide.classList.add('loading');
    });
}

// Mostrar slide específico
function showSlide(index) {
    if (isTransitioning || index < 0 || index >= totalSlides) return;
    
    isTransitioning = true;
    
    const currentSlideElement = slides[currentSlide];
    const targetSlideElement = slides[index];
    
    // Determinar dirección de la transición
    const direction = index > currentSlide ? 1 : -1;
    
    // Timeline para la transición
    const tl = gsap.timeline({
        onComplete: () => {
            isTransitioning = false;
            currentSlide = index;
            updateNavigation();
        }
    });
    
    // Ocultar slide actual
    tl.to(currentSlideElement, {
        opacity: 0,
        x: direction === 1 ? '-100%' : '100%',
        duration: 0.8,
        ease: 'power2.inOut'
    });
    
    // Mostrar slide objetivo
    tl.to(targetSlideElement, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.inOut'
    }, '-=0.4'); // Sobreposición para transición suave
    
    // Actualizar clases CSS
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    
    navDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    targetSlideElement.classList.add('active');
    navDots[index].classList.add('active');
    
    // Ocultar todos los indicadores de slide y mostrar solo el del slide activo
    const allSlideIndicators = document.querySelectorAll('.slide-indicator');
    allSlideIndicators.forEach(indicator => {
        indicator.style.display = 'none';
    });
    
    const activeSlideIndicator = targetSlideElement.querySelector('.slide-indicator');
    if (activeSlideIndicator) {
        activeSlideIndicator.style.display = 'flex';
    }
    
    // Animar contenido del slide
    animateSlideContent(targetSlideElement);
}

// Animar contenido del slide
function animateSlideContent(slide) {
    const elements = slide.querySelectorAll('h1, h2, h3, p, .avatar, .proyecto, .skill-tag');
    
    // Resetear elementos
    elements.forEach(element => {
        gsap.set(element, { opacity: 0, y: 30 });
    });
    
    // Animar elementos secuencialmente
    gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3
    });
}

// Actualizar navegación
function updateNavigation() {
    // Actualizar flechas
    const prevArrow = document.querySelector('.nav-arrow.prev');
    const nextArrow = document.querySelector('.nav-arrow.next');
    
    if (prevArrow) {
        gsap.to(prevArrow, {
            opacity: currentSlide === 0 ? 0.3 : 1,
            duration: 0.3
        });
        prevArrow.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    }
    
    if (nextArrow) {
        gsap.to(nextArrow, {
            opacity: currentSlide === totalSlides - 1 ? 0.3 : 1,
            duration: 0.3
        });
        nextArrow.style.pointerEvents = currentSlide === totalSlides - 1 ? 'none' : 'auto';
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Navegación por puntos
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (!isTransitioning) {
                // Ocultar indicador de scroll en la primera interacción
                if (!hasInteracted) {
                    hasInteracted = true;
                    const scrollIndicator = document.getElementById('scrollIndicator');
                    if (scrollIndicator) {
                        gsap.to(scrollIndicator, {
                            opacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                scrollIndicator.style.display = 'none';
                            }
                        });
                    }
                }
                
                showSlide(index);
            }
        });
        
        // Navegación por teclado para puntos de navegación
        dot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (!isTransitioning) {
                    showSlide(index);
                }
            }
        });
    });
    
    // Navegación por flechas
    navArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (isTransitioning) return;
            
            if (arrow.classList.contains('prev')) {
                showSlide(currentSlide - 1);
            } else if (arrow.classList.contains('next')) {
                showSlide(currentSlide + 1);
            }
        });
        
        // Navegación por teclado para flechas de navegación
        arrow.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (isTransitioning) return;
                
                if (arrow.classList.contains('prev')) {
                    showSlide(currentSlide - 1);
                } else if (arrow.classList.contains('next')) {
                    showSlide(currentSlide + 1);
                }
            }
        });
    });
    
    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
        if (isTransitioning) return;
        
        // Verificar si estamos en el slide de proyectos
        const projectsSlide = document.getElementById('slide-proyectos');
        const isOnProjectsSlide = projectsSlide && projectsSlide.classList.contains('active');
        
        // Si estamos en el slide de proyectos, permitir que el slider interno maneje las teclas
        if (isOnProjectsSlide) {
            // Solo manejar teclas específicas para navegación principal cuando estamos en proyectos
            switch(e.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    // Estas teclas van a la navegación principal de slides
                    if (e.key === 'ArrowUp') {
                        showSlide(currentSlide - 1);
                    } else {
                        showSlide(currentSlide + 1);
                    }
                    break;
                case 'Home':
                    showSlide(0);
                    break;
                case 'End':
                    showSlide(totalSlides - 1);
                    break;
                case 'PageUp':
                    showSlide(Math.max(0, currentSlide - 1));
                    break;
                case 'PageDown':
                    showSlide(Math.min(totalSlides - 1, currentSlide + 1));
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                    const slideIndex = parseInt(e.key) - 1;
                    if (slideIndex < totalSlides) {
                        showSlide(slideIndex);
                    }
                    break;
                // ArrowLeft y ArrowRight se manejan en el slider de proyectos
                default:
                    return; // Permitir que otros event listeners manejen estas teclas
            }
        } else {
            // En otros slides, manejar todas las teclas normalmente
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    showSlide(currentSlide - 1);
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                    showSlide(currentSlide + 1);
                    break;
                case 'Home':
                    showSlide(0);
                    break;
                case 'End':
                    showSlide(totalSlides - 1);
                    break;
                case 'PageUp':
                    showSlide(Math.max(0, currentSlide - 1));
                    break;
                case 'PageDown':
                    showSlide(Math.min(totalSlides - 1, currentSlide + 1));
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                    const slideIndex = parseInt(e.key) - 1;
                    if (slideIndex < totalSlides) {
                        showSlide(slideIndex);
                    }
                    break;
            }
        }
    });
    
    // Navegación por scroll
    let isScrolling = false;
    let scrollTimeout;
    
    document.addEventListener('wheel', (e) => {
        if (isTransitioning || isScrolling) return;
        
        e.preventDefault();
        isScrolling = true;
        
        // Ocultar indicador de scroll en la primera interacción
        if (!hasInteracted) {
            hasInteracted = true;
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (scrollIndicator) {
                gsap.to(scrollIndicator, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        scrollIndicator.style.display = 'none';
                    }
                });
            }
        }
        
        const currentSlideElement = slides[currentSlide];
        const slideContent = currentSlideElement.querySelector('.slide-content');
        
        // Verificar si estamos en el slide de proyectos
        const projectsSlide = document.getElementById('slide-proyectos');
        const isOnProjectsSlide = projectsSlide && projectsSlide.classList.contains('active');
        
        if (isOnProjectsSlide) {
            // En el slide de proyectos, el scroll maneja la navegación del slider interno
            if (e.deltaY > 0) {
                // Scroll hacia abajo - siguiente proyecto
                nextProject();
            } else {
                // Scroll hacia arriba - proyecto anterior
                prevProject();
            }
        } else {
            // En otros slides, manejar scroll normal del contenido
            // Verificar si el contenido del slide es scrollable
            const isContentScrollable = slideContent.scrollHeight > slideContent.clientHeight;
            
            if (isContentScrollable) {
                // Si el contenido es scrollable, manejar scroll interno primero
                const scrollTop = slideContent.scrollTop;
                const scrollHeight = slideContent.scrollHeight;
                const clientHeight = slideContent.clientHeight;
                
                if (e.deltaY > 0) {
                    // Scroll hacia abajo
                    if (scrollTop + clientHeight >= scrollHeight) {
                        // Estamos al final del contenido, ir al siguiente slide
                        showSlide(currentSlide + 1);
                    } else {
                        // Scroll interno dentro del slide
                        slideContent.scrollTop += 50;
                    }
                } else {
                    // Scroll hacia arriba
                    if (scrollTop <= 0) {
                        // Estamos al inicio del contenido, ir al slide anterior
                        showSlide(currentSlide - 1);
                    } else {
                        // Scroll interno dentro del slide
                        slideContent.scrollTop -= 50;
                    }
                }
            } else {
                // Si el contenido no es scrollable, transición directa entre slides
                if (e.deltaY > 0) {
                    showSlide(currentSlide + 1);
                } else {
                    showSlide(currentSlide - 1);
                }
            }
        }
        
        // Resetear flag de scroll después de un delay
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }, { passive: false });
    
    // Navegación por gestos táctiles
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    document.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Solo procesar si el gesto es principalmente horizontal
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe izquierda - siguiente slide
                showSlide(currentSlide + 1);
            } else {
                // Swipe derecha - slide anterior
                showSlide(currentSlide - 1);
            }
        }
    });
    
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            const targetSlide = document.querySelector(target);
            
            if (targetSlide) {
                const slideIndex = Array.from(slides).indexOf(targetSlide);
                if (slideIndex !== -1) {
                    showSlide(slideIndex);
                }
            }
        });
    });
}

// Funciones de galería
function openGallery(projectType) {
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const clickedImage = event.target;
    
    if (modal && modalImage && clickedImage.src) {
        modalImage.src = clickedImage.src;
        modalImage.alt = clickedImage.alt;
        modal.classList.add('active');
        
        // Prevenir scroll del body
        document.body.style.overflow = 'hidden';
    }
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Event listeners para galería
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGallery();
    }
    
    // Navegación por teclado en galería
    const modal = document.getElementById('galleryModal');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'Tab') {
            // Permitir navegación por Tab dentro del modal
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }
});

document.getElementById('galleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'galleryModal') {
        closeGallery();
    }
});

// Funciones de video
function playVideo(playButton) {
    const videoContainer = playButton.closest('.video-container');
    const video = videoContainer.querySelector('video');
    const overlay = videoContainer.querySelector('.video-overlay');
    
    if (video.paused) {
        video.play();
        overlay.style.opacity = '0';
        playButton.style.display = 'none';
    } else {
        video.pause();
        overlay.style.opacity = '1';
        playButton.style.display = 'flex';
    }
}

// Event listeners para videos
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('ended', function() {
        const container = this.closest('.video-container');
        const overlay = container.querySelector('.video-overlay');
        const playButton = container.querySelector('.play-button');
        
        overlay.style.opacity = '1';
        playButton.style.display = 'flex';
    });
});

// Efecto de escritura para el título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animación de contador
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Crear partículas de fondo
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Animación de carga
function animateOnLoad() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            slides.forEach((slide, index) => {
                setTimeout(() => {
                    slide.classList.remove('loading');
                    slide.classList.add('loaded');
                }, index * 200);
            });
        }, 500);
    });
}

// Efectos de hover para skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    tag.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Animación del botón de envío del formulario
document.querySelector('button[type="submit"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
    });
    
    // Aquí puedes añadir la lógica de envío del formulario
    console.log('Formulario enviado');
});

// Efecto de escritura para el título principal - sincronizado con el preloader
window.addEventListener('load', function() {
    const titleElement = document.querySelector('#titulo-inicio');
    if (titleElement) {
        // Esperar a que termine el preloader antes de iniciar la animación
        setTimeout(() => {
            const originalText = titleElement.textContent;
            typeWriter(titleElement, originalText, 100);
        }, 3500); // Sincronizado con el tiempo del preloader
    }
});

// Funcionalidad del botón "Ver Proyectos"
function setupProjectsToggle() {
    const verProyectosBtn = document.getElementById('verProyectosBtn');
    const projectsIntro = document.getElementById('projectsIntro');
    const projectsSliderContainer = document.getElementById('projectsSliderContainer');
    
    if (verProyectosBtn && projectsIntro && projectsSliderContainer) {
        verProyectosBtn.addEventListener('click', function() {
            // Ocultar la introducción con animación
            projectsIntro.style.opacity = '0';
            projectsIntro.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                projectsIntro.style.display = 'none';
                
                // Mostrar el slider con animación
                projectsSliderContainer.style.display = 'block';
                projectsSliderContainer.style.opacity = '0';
                projectsSliderContainer.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    projectsSliderContainer.style.opacity = '1';
                    projectsSliderContainer.style.transform = 'translateY(0)';
                    projectsSliderContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                }, 100);
            }, 300);
        });
    }
}

// Inicializar la funcionalidad del botón "Ver Proyectos"
document.addEventListener('DOMContentLoaded', function() {
    setupProjectsToggle();
});

// Log de éxito
console.log('🎉 Sistema de slides cargado con éxito!');
console.log(`📊 Total de slides: ${totalSlides}`);
console.log('🚀 Navegación por teclado, táctil y mouse habilitada'); 