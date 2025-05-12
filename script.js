document.addEventListener('DOMContentLoaded', () => {

    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.mobile-nav a');
    const body = document.body;

    
    const toggleMenu = (isOpen) => {
        if (isOpen) {
            mobileMenuOverlay.style.left = '0';
            body.style.overflow = 'hidden';
            burgerMenu.style.display = 'none';
        } else {
            mobileMenuOverlay.style.left = '-100%';
            body.style.overflow = 'auto';
            burgerMenu.style.display = 'block';
        }
    };

    
    burgerMenu.addEventListener('click', () => toggleMenu(true));
    closeBtn.addEventListener('click', () => toggleMenu(false));
    
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) toggleMenu(false);
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (window.innerWidth < 1025) toggleMenu(false);
        });
    });

    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 100);
    });

    
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.hero-title span', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out"
    });

    gsap.from('.hero-subtitle, .hero-text, .hero-cta', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5,
        ease: "back.out(1.7)"
    });

    
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    const lazyLoad = () => {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight + 200) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
        });
    };

    window.addEventListener('scroll', lazyLoad);
    lazyLoad();

    
    let touchStartX = 0;
    mobileMenuOverlay.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].clientX;
    }, false);

    mobileMenuOverlay.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) toggleMenu(false);
    }, false);

    
    if (!CSS.supports('aspect-ratio', '1/1')) {
        document.querySelectorAll('.responsive-image').forEach(img => {
            const wrapper = document.createElement('div');
            wrapper.style.position = 'relative';
            wrapper.style.paddingBottom = `${(img.height / img.width) * 100}%`;
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
            img.style.position = 'absolute';
            img.style.width = '100%';
            img.style.height = '100%';
        });
    }
});

if ('scrollBehavior' in document.documentElement.style === false) {
    import('smoothscroll-polyfill').then((module) => {
        module.polyfill();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.close-btn');

    burger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileMenu.addEventListener('click', (e) => {
        if(e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

function copyAddress() {
    const address = document.getElementById('bnb-address').innerText;
    const notification = document.querySelector('.copy-notification');
    
    
    const textArea = document.createElement('textarea');
    textArea.value = address;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if(successful) {
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        }
    } catch (err) {
        console.error('Failed to copy:', err);
    } finally {
        document.body.removeChild(textArea);
    }
}

function copyAddress() {
    const address = document.getElementById('bnb-address').innerText;
    navigator.clipboard.writeText(address).then(() => {
        const notification = document.querySelector('.copy-notification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.close-btn');

    burger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileMenu.addEventListener('click', (e) => {
        if(e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});