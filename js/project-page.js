document.addEventListener('DOMContentLoaded', () => {
    initProjectMobileNav();
});

function initProjectMobileNav() {
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

    links.forEach((link) => link.addEventListener('click', () => close()));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close();
    });
}
