document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero--editorial')) {
        document.body.classList.add('has-light-hero');
    }
    injectSiteCopy();
    initMobileNav();
    initSmoothScroll();
    initHeaderScroll();
    initServices();
    initDifferentials();
    initPortfolio();
    initReveal();
});

function injectSiteCopy() {
    const cfg = siteConfig;
    const waUrl = `https://wa.me/${cfg.whatsappDigits}`;

    const heroWa = document.getElementById('heroWhatsapp');
    if (heroWa) heroWa.href = waUrl;
    const ctaWa = document.getElementById('ctaWhatsapp');
    if (ctaWa) ctaWa.href = waUrl;

    const mailto = `mailto:${cfg.email}`;
    const ctaEmail = document.getElementById('ctaEmail');
    if (ctaEmail) ctaEmail.href = mailto;

    const aboutLead = document.getElementById('aboutLead');
    if (aboutLead) {
        aboutLead.textContent = `${cfg.architectName} — ${cfg.roleLine}`;
    }

    const text1 = document.getElementById('aboutText1');
    const text2 = document.getElementById('aboutText2');
    if (text1) {
        text1.textContent =
            'Estudante de Arquitetura e Urbanismo com interesse em criar espaços que transformam a maneira como vivemos e nos relacionamos com o ambiente. O trabalho explora a intersecção entre funcionalidade, estética e sustentabilidade, buscando soluções que respondem às necessidades humanas e respeitam o meio ambiente.';
    }
    if (text2) {
        text2.textContent =
            'O portfólio reúne projetos desenvolvidos na graduação e no estágio — do BIM e das pranchas técnicas à visualização 3D — sempre com organização, clareza e cuidado com a representação.';
    }

    const footerYear = document.getElementById('footerYear');
    if (footerYear) {
        footerYear.textContent = `© ${new Date().getFullYear()} ${cfg.architectName}. Todos os direitos reservados.`;
    }

    buildContactList(cfg, waUrl, mailto);
}

function buildContactList(cfg, waUrl, mailto) {
    const list = document.getElementById('contactList');
    if (!list) return;

    const items = [
        {
            label: 'WhatsApp',
            value: 'Conversar agora',
            href: waUrl,
            external: true,
        },
        {
            label: 'E-mail',
            value: cfg.email,
            href: mailto,
            external: false,
        },
    ];

    if (cfg.instagramUser && cfg.instagramUser.trim()) {
        const user = cfg.instagramUser.replace(/^@/, '');
        items.push({
            label: 'Instagram',
            value: `@${user}`,
            href: `https://instagram.com/${user}`,
            external: true,
        });
    }

    list.innerHTML = '';
    items.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'contact__item reveal';
        const a = document.createElement('a');
        a.className = 'contact__link';
        a.href = item.href;
        if (item.external) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        a.innerHTML = `<span class="contact__label">${item.label}</span><span class="contact__value">${item.value}</span>`;
        li.appendChild(a);
        list.appendChild(li);
    });
}

function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('siteNav');
    const header = document.querySelector('[data-header]');
    if (!toggle || !nav) return;

    const links = nav.querySelectorAll('.site-nav__link');

    const setMenuOpen = (open) => {
        if (header) header.classList.toggle('is-menu-open', open);
    };

    const close = () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
        setMenuOpen(false);
    };

    toggle.addEventListener('click', () => {
        const open = !nav.classList.contains('is-open');
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('nav-open', open);
        setMenuOpen(open);
    });

    links.forEach((link) => {
        link.addEventListener('click', () => close());
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
}

function initSmoothScroll() {
    document.querySelectorAll('[data-smooth]').forEach((el) => {
        el.addEventListener('click', (e) => {
            const href = el.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const id = href.slice(1);
            const target = document.getElementById(id);
            if (!target) return;
            e.preventDefault();
            const header = document.querySelector('[data-header]');
            const offset = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

function initHeaderScroll() {
    const header = document.querySelector('[data-header]');
    if (!header) return;

    const onScroll = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
}

function iconSvg(name) {
    const common =
        'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
    switch (name) {
        case 'plan':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5M4 19h16M4 19l3-6 4 3 5-8 4 6"/></svg>`;
        case 'grid':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`;
        case 'compass':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5 10 14l-2.5 2.5L10 14l4.5-4.5z"/></svg>`;
        case 'layers':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/></svg>`;
        case 'home':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z"/></svg>`;
        case 'building':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12h4M14 8h4M14 12h4M10 16h4"/></svg>`;
        case 'cube':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2Z"/><path d="M12 12 20.66 7M12 12v10M12 12 3.34 7"/></svg>`;
        case 'cabinet':
            return `<svg ${common} viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 10h16M12 10v11"/></svg>`;
        default:
            return '';
    }
}

function initServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid || typeof servicesList === 'undefined') return;

    servicesList.forEach((s) => {
        const article = document.createElement('article');
        article.className = 'service-card reveal';
        article.innerHTML = `
            <div class="service-card__icon" aria-hidden="true">${iconSvg(s.icon)}</div>
            <h3 class="service-card__title">${s.title}</h3>
            <p class="service-card__text">${s.text}</p>
        `;
        grid.appendChild(article);
    });
}

function initDifferentials() {
    const grid = document.getElementById('differentialsGrid');
    if (!grid || typeof programsList === 'undefined') return;

    const levelSlug = (level) => {
        if (level === 'Iniciante') return 'beginner';
        if (level === 'Intermediário') return 'intermediate';
        if (level === 'Avançado') return 'advanced';
        return 'default';
    };

    programsList.forEach((p) => {
        const li = document.createElement('li');
        li.className = 'program-card reveal';
        const slug = levelSlug(p.level);
        const iconSrc = p.iconFile || '';

        li.innerHTML = `
            <div class="program-card__icon-wrap" aria-hidden="true">
                <img src="${iconSrc}" alt="" class="program-card__icon" loading="lazy" decoding="async">
                <span class="program-card__fallback" hidden>${p.initials}</span>
            </div>
            <h3 class="program-card__name">${p.name}</h3>
            <span class="program-card__level program-card__level--${slug}">${p.level}</span>
        `;

        const img = li.querySelector('.program-card__icon');
        const fb = li.querySelector('.program-card__fallback');
        if (img && fb) {
            img.addEventListener('error', () => {
                img.style.display = 'none';
                fb.hidden = false;
            });
            if (!iconSrc) {
                img.style.display = 'none';
                fb.hidden = false;
            }
        }

        grid.appendChild(li);
    });
}

function excerpt(text, max) {    const m = typeof max === 'number' ? max : 160;
    if (!text) return '';
    const t = text.replace(/\s+/g, ' ').trim();
    if (t.length <= m) return t;
    return `${t.slice(0, m).trim()}…`;
}

function initPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    const filters = document.getElementById('portfolioFilters');
    if (!grid || !projectsData) return;

    const categories = [...new Set(projectsData.map((p) => p.category).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b, 'pt-BR')
    );

    let activeCategory = 'all';

    const renderFilters = () => {
        if (!filters) return;
        filters.innerHTML = '';
        const mkBtn = (id, label) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'filter-chip' + (id === activeCategory ? ' is-active' : '');
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', id === activeCategory ? 'true' : 'false');
            btn.dataset.category = id;
            btn.textContent = label;
            btn.addEventListener('click', () => {
                activeCategory = id;
                renderFilters();
                renderGrid();
            });
            filters.appendChild(btn);
        };
        mkBtn('all', 'Todos');
        categories.forEach((c) => mkBtn(c, c));
    };

    const renderGrid = () => {
        grid.innerHTML = '';
        const list =
            activeCategory === 'all'
                ? projectsData
                : projectsData.filter((p) => p.category === activeCategory);

        list.forEach((project) => {
            const card = document.createElement('article');
            card.className = 'project-card';

            const media = document.createElement('div');
            media.className = 'project-card__media';

            const img = document.createElement('img');
            img.src = project.thumbnail;
            img.alt = `${project.name} — imagem de capa`;
            img.className = 'project-card__img';
            img.loading = 'lazy';
            img.decoding = 'async';

            media.appendChild(img);

            const body = document.createElement('div');
            body.className = 'project-card__body';
            body.innerHTML = `
                <p class="project-card__category">${project.category || ''}</p>
                <h3 class="project-card__name">${project.name}</h3>
                <p class="project-card__excerpt">${excerpt(project.description)}</p>
                <a href="project.html?id=${project.id}" class="project-card__btn btn btn--text">Ver projeto</a>
            `;

            card.appendChild(media);
            card.appendChild(body);
            grid.appendChild(card);
        });
    };

    renderFilters();
    renderGrid();
}

function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));
}
