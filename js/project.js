let currentProject = null;
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    if (projectId) {
        loadProject(projectId);
        initLightbox();
    }
});

function loadProject(projectId) {
    currentProject = projectsData.find(p => p.id === projectId);
    
    if (!currentProject) {
        window.location.href = 'index.html';
        return;
    }
    
    document.getElementById('projectTitle').textContent = currentProject.name;
    document.getElementById('projectCategory').textContent = currentProject.category;
    document.getElementById('projectYear').textContent = currentProject.year;
    document.getElementById('projectDescription').textContent = currentProject.description;
    
    // Carregar link de download se existir
    const downloadLink = document.getElementById('downloadLink');
    if (currentProject.pdfFile) {
        downloadLink.href = currentProject.pdfFile;
        downloadLink.style.display = 'inline-flex';
    } else {
        downloadLink.style.display = 'none';
    }
    
    const projectImages = document.getElementById('projectImages');
    currentProject.images.forEach((imageSrc, index) => {
        const imageItem = createImageItem(imageSrc, index);
        projectImages.appendChild(imageItem);
    });
    
    setupNavigation(projectId);
}

function createImageItem(imageSrc, index) {
    const imageItem = document.createElement('div');
    imageItem.className = 'project-image-item loading';
    imageItem.dataset.index = index;
    
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = `${currentProject.name} - Imagem ${index + 1}`;
    image.className = 'project-image-full';
    
    imageItem.appendChild(image);
    
    imageItem.addEventListener('click', function() {
        openLightbox(index);
    });
    
    return imageItem;
}

function setupNavigation(currentId) {
    const currentIndex = projectsData.findIndex(p => p.id === currentId);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : projectsData.length - 1;
    const nextIndex = currentIndex < projectsData.length - 1 ? currentIndex + 1 : 0;
    
    const prevProject = projectsData[prevIndex];
    const nextProject = projectsData[nextIndex];
    
    const prevLink = document.getElementById('prevProject');
    const nextLink = document.getElementById('nextProject');
    
    prevLink.href = `project.html?id=${prevProject.id}`;
    document.getElementById('prevTitle').textContent = prevProject.name;
    
    nextLink.href = `project.html?id=${nextProject.id}`;
    document.getElementById('nextTitle').textContent = nextProject.name;
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = currentProject.images[currentImageIndex];
    lightboxImage.alt = `${currentProject.name} - Imagem ${currentImageIndex + 1}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrevImage() {
    currentImageIndex = currentImageIndex > 0 
        ? currentImageIndex - 1 
        : currentProject.images.length - 1;
    updateLightboxImage();
}

function showNextImage() {
    currentImageIndex = currentImageIndex < currentProject.images.length - 1 
        ? currentImageIndex + 1 
        : 0;
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = currentProject.images[currentImageIndex];
        lightboxImage.alt = `${currentProject.name} - Imagem ${currentImageIndex + 1}`;
        lightboxImage.style.opacity = '1';
    }, 150);
}