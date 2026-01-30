document.addEventListener('DOMContentLoaded', function() {
    initProjects();
    initSmoothScroll();
});

function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsData.forEach(project => {
        const projectCarousel = createProjectCarousel(project);
        projectsGrid.appendChild(projectCarousel);
    });
}

function createProjectCarousel(project) {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'project-carousel-item';
    carouselItem.dataset.projectId = project.id;
    
    // Container do carrossel
    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';
    
    // Imagens do carrossel
    const carouselImages = document.createElement('div');
    carouselImages.className = 'carousel-images';
    
    project.images.forEach((imageSrc, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${project.name} - Imagem ${index + 1}`;
        
        slide.appendChild(img);
        carouselImages.appendChild(slide);
    });
    
    carouselContainer.appendChild(carouselImages);
    
    // Controles do carrossel (apenas se houver mais de 1 imagem)
    if (project.images.length > 1) {
        const controls = document.createElement('div');
        controls.className = 'carousel-controls';
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn carousel-prev';
        prevBtn.innerHTML = '‹';
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            moveCarousel(carouselImages, 'prev', project.images.length);
        };
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn carousel-next';
        nextBtn.innerHTML = '›';
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            moveCarousel(carouselImages, 'next', project.images.length);
        };
        
        controls.appendChild(prevBtn);
        controls.appendChild(nextBtn);
        carouselContainer.appendChild(controls);
        
        // Indicadores
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        
        project.images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
            indicator.onclick = (e) => {
                e.stopPropagation();
                moveCarouselToSlide(carouselImages, index, indicators);
            };
            indicators.appendChild(indicator);
        });
        
        carouselContainer.appendChild(indicators);
    }
    
    // Overlay com informações
    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    
    const overlayContent = document.createElement('div');
    overlayContent.className = 'project-overlay-content';
    
    const category = document.createElement('p');
    category.className = 'project-overlay-category';
    category.textContent = project.category;
    
    const title = document.createElement('h2');
    title.className = 'project-overlay-title';
    title.textContent = project.name;
    
    const description = document.createElement('p');
    description.className = 'project-overlay-description';
    description.textContent = project.description;
    
    const link = document.createElement('a');
    link.className = 'project-overlay-link';
    link.href = `project.html?id=${project.id}`;
    link.innerHTML = 'Ver Projeto <span>→</span>';
    
    overlayContent.appendChild(category);
    overlayContent.appendChild(title);
    overlayContent.appendChild(description);
    overlayContent.appendChild(link);
    
    overlay.appendChild(overlayContent);
    
    // Click no item inteiro leva para o projeto
    carouselItem.onclick = (e) => {
        if (!e.target.closest('.carousel-btn') && !e.target.closest('.carousel-indicator')) {
            window.location.href = `project.html?id=${project.id}`;
        }
    };
    
    carouselItem.appendChild(carouselContainer);
    carouselItem.appendChild(overlay);
    
    return carouselItem;
}

let carouselCurrentSlides = new Map();

function moveCarousel(carouselImages, direction, totalSlides) {
    const carouselId = carouselImages.parentElement.parentElement.dataset.projectId;
    let currentSlide = carouselCurrentSlides.get(carouselId) || 0;
    
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
    
    carouselCurrentSlides.set(carouselId, currentSlide);
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Atualizar indicadores
    const indicators = carouselImages.parentElement.querySelector('.carousel-indicators');
    if (indicators) {
        const allIndicators = indicators.querySelectorAll('.carousel-indicator');
        allIndicators.forEach((ind, idx) => {
            ind.classList.toggle('active', idx === currentSlide);
        });
    }
}

function moveCarouselToSlide(carouselImages, slideIndex, indicators) {
    const carouselId = carouselImages.parentElement.parentElement.dataset.projectId;
    carouselCurrentSlides.set(carouselId, slideIndex);
    carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
    
    const allIndicators = indicators.querySelectorAll('.carousel-indicator');
    allIndicators.forEach((ind, idx) => {
        ind.classList.toggle('active', idx === slideIndex);
    });
}

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Scroll suave para o elemento
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}