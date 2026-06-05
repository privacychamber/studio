document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.querySelector('[aria-label="Toggle theme"]');
    if (themeToggleBtn) {
        // Simple dark mode toggle on the html element
        themeToggleBtn.addEventListener('click', () => {
            const htmlEl = document.documentElement;
            if (htmlEl.classList.contains('dark')) {
                htmlEl.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlEl.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Load preference
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    // 2. Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('button.lg\\:hidden');
    
    if (mobileMenuBtn) {
        // Create the mobile menu overlay manually since Radix UI stripped it
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm transition-all duration-300 opacity-0 pointer-events-none flex flex-col pt-24 px-6';
        
        // Define links based on navbar
        mobileMenu.innerHTML = `
            <div class="fixed top-0 right-0 p-4">
                <button id="close-mobile-menu" class="p-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            <div class="flex flex-col gap-6 text-xl font-bold tracking-widest uppercase">
                <a href="/" class="hover:text-primary transition-colors">Home</a>
                <a href="/services.html" class="hover:text-primary transition-colors">Services</a>
                <a href="/academy.html" class="hover:text-primary transition-colors">Academy</a>
                <a href="/gallery.html" class="hover:text-primary transition-colors">Gallery</a>
                <a href="/about.html" class="hover:text-primary transition-colors">About Us</a>
                <a href="/reviews.html" class="hover:text-primary transition-colors">Reviews</a>
                <a href="/contact.html" class="hover:text-primary transition-colors">Contact</a>
                <a href="/book.html" class="mt-4 bg-primary text-white text-center py-4 rounded-full text-sm">Book Appointment</a>
            </div>
        `;
        
        document.body.appendChild(mobileMenu);
        
        const closeBtn = mobileMenu.querySelector('#close-mobile-menu');
        
        function openMenu() {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenu() {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = '';
        }
        
        mobileMenuBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
    }
    
    // 3. Mobile sticky bar logic
    // The bar at the bottom might start hidden and translate-y-full
    const mobileSticky = document.querySelector('.translate-y-full.opacity-0');
    if (mobileSticky) {
        setTimeout(() => {
            mobileSticky.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
        }, 1000);
    }

    // 4. Hero Slider Logic
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll('.slider-img');
        const prevBtn = document.getElementById('hero-prev');
        const nextBtn = document.getElementById('hero-next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('opacity-0', 'z-0');
                    slide.classList.add('opacity-100', 'z-10');
                } else {
                    slide.classList.remove('opacity-100', 'z-10');
                    slide.classList.add('opacity-0', 'z-0');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        function startAutoPlay() {
            slideInterval = setInterval(nextSlide, 4000);
        }

        function resetAutoPlay() {
            clearInterval(slideInterval);
            startAutoPlay();
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay();
            });
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay();
            });
        }

        // Initialize
        showSlide(currentSlide);
        startAutoPlay();
    }
});
