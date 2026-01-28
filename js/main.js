document.addEventListener('DOMContentLoaded', function() {
    initProjects();
    initSmoothScroll();
});

function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('a');
    card.href = `project.html?id=${project.id}`;
    card.className = 'project-card loading';
    
    const image = document.createElement('img');
    image.src = project.thumbnail;
    image.alt = project.name;
    image.className = 'project-image';
    
    const info = document.createElement('div');
    info.className = 'project-info';
    
    const name = document.createElement('h3');
    name.className = 'project-name';
    name.textContent = project.name;
    
    const category = document.createElement('span');
    category.className = 'project-category';
    category.textContent = project.category;
    
    info.appendChild(name);
    info.appendChild(category);
    
    card.appendChild(image);
    card.appendChild(info);
    
    return card;
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
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 40;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}