<?php
require_once __DIR__ . '/includes/data.php';
include __DIR__ . '/includes/header.php';
?>

    <!-- Main Content -->
    <main class="flex-grow">
        
        <!-- Hero Section -->
        <section class="relative pt-6 pb-8 overflow-hidden bg-white dark:bg-background min-h-[calc(100vh-90px)] flex items-center">
            <!-- Large Pink Arc Background -->
            <div class="absolute right-0 top-0 w-[55%] h-full bg-primary/10 rounded-l-full -z-10 hidden md:block"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                    
                    <!-- Left Content -->
                    <div class="max-w-2xl pt-4 md:pt-10 pb-6">
                        <?php if(!empty($data["hero"])): ?>
<p class="font-accent text-primary text-3xl md:text-4xl mb-4"><?php echo htmlspecialchars($data["hero"]["tagline"] ?? ""); ?></p>
                        <h1 class="text-5xl md:text-6xl font-headline font-bold leading-[1.05] text-[#0a142f] dark:text-white mb-4">
    <?php echo htmlspecialchars($data['hero']['headlinePart1'] ?? ''); ?><br/>
    <span class="text-primary"><?php echo htmlspecialchars($data['hero']['headlineHighlight'] ?? ''); ?></span><br/>
    <?php echo htmlspecialchars($data['hero']['headlinePart2'] ?? ''); ?>
</h1>
                        <p class="text-[#4b5563] dark:text-gray-300 text-lg font-medium mb-6">
    <?php echo htmlspecialchars($data['hero']['subtext'] ?? ''); ?>
</p>
<?php endif; ?>
                        
                        <div class="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href="/book.html" class="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                BOOK APPOINTMENT
                            </a>
                            <a href="/academy.html" class="inline-flex items-center justify-center gap-2 border border-primary text-[#0a142f] dark:text-white px-8 py-3.5 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-primary/5 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                                EXPLORE COURSES
                            </a>
                        </div>
                        
                        <!-- Trust Badges -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-4 border-t border-gray-200 dark:border-border">
                            <div class="flex items-center gap-3">
                                <div class="text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm text-[#0a142f] dark:text-white leading-tight">1000+</p>
                                    <p class="text-[9px] uppercase tracking-wider text-gray-500 dark:text-gray-400">Happy Clients</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm text-[#0a142f] dark:text-white leading-tight">Certified</p>
                                    <p class="text-[9px] uppercase tracking-wider text-gray-500 dark:text-gray-400">Beauty Academy</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm text-[#0a142f] dark:text-white leading-tight">Premium Salon</p>
                                    <p class="text-[9px] uppercase tracking-wider text-gray-500 dark:text-gray-400">in Your City</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="10" r="3"/></svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm text-[#0a142f] dark:text-white leading-tight">Hygienic &amp; Safe</p>
                                    <p class="text-[9px] uppercase tracking-wider text-gray-500 dark:text-gray-400">Environment</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Images -->
                    <div class="relative hidden md:flex items-center justify-end h-full py-6">
                        <div class="relative z-10 w-[340px] h-[480px] rounded-t-full rounded-b-full overflow-hidden border-[10px] border-white shadow-2xl mr-12 lg:mr-16">
                            <?php if(!empty($data['hero']['mainImage'])): ?>
    <img src="<?php echo htmlspecialchars($data['hero']['mainImage']); ?>" alt="Model" class="w-full h-full object-cover object-top" />
  <?php else: ?>
    <img src="/public/images/IMG_0568.JPG.jpeg" alt="Model" class="w-full h-full object-cover object-top" />
  <?php endif; ?>
                        </div>
                        
                        <!-- Floating Sidebar Cards -->
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                            <!-- Brows -->
                            <div class="bg-[#fff9fa] dark:bg-card rounded-xl p-2.5 shadow-lg w-[140px] border border-pink-100 dark:border-border bg-white dark:bg-card">
                                <p class="text-[10px] font-bold text-center uppercase tracking-widest text-[#0a142f] dark:text-white mb-2">BROWS</p>
                                <div class="grid grid-rows-2 gap-1 h-[80px]">
                                    <img src="/public/images/brows_before.png" class="w-full h-full object-cover rounded" alt="Before"/>
                                    <img src="/public/images/brows_after.png" class="w-full h-full object-cover rounded" alt="After"/>
                                </div>
                            </div>
                            <!-- Hair -->
                            <div class="bg-[#fff9fa] dark:bg-card rounded-xl p-2.5 shadow-lg w-[140px] border border-pink-100 dark:border-border -translate-x-6 bg-white dark:bg-background">
                                <p class="text-[10px] font-bold text-center uppercase tracking-widest text-[#0a142f] dark:text-white mb-2">HAIR</p>
                                <div class="grid grid-cols-2 gap-1 h-[40px]">
                                    <img src="/public/images/hair_before.png" class="w-full h-full object-cover rounded" alt="Before"/>
                                    <img src="/public/images/hair_after.png" class="w-full h-full object-cover rounded" alt="After"/>
                                </div>
                            </div>
                            <!-- Lips -->
                            <div class="bg-[#fff9fa] dark:bg-card rounded-xl p-2.5 shadow-lg w-[140px] border border-pink-100 dark:border-border bg-white dark:bg-card">
                                <p class="text-[10px] font-bold text-center uppercase tracking-widest text-[#0a142f] dark:text-white mb-2">LIPS</p>
                                <div class="grid grid-rows-2 gap-1 h-[80px]">
                                    <img src="/public/images/lips_before.png" class="w-full h-full object-cover rounded" alt="Before"/>
                                    <img src="/public/images/lips_after.png" class="w-full h-full object-cover rounded" alt="After"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- WhatsApp Float -->
            <a href="https://wa.me/917087657000" target="_blank" class="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] z-50 hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
        </section>

        <!-- Transformations Section -->
        <section class="py-16 bg-white dark:bg-background border-t border-gray-100 dark:border-border overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <h2 class="text-2xl font-headline font-bold text-[#0a142f] dark:text-white mb-10 tracking-wide">REAL. RESULTS. REAL. <span class="text-primary">TRANSFORMATIONS.</span></h2>
                
                <div class="relative px-12 max-w-4xl mx-auto">
                    <!-- Carousel container -->
                    <div class="overflow-hidden relative">
                        <div id="transform-slider" class="flex transition-transform duration-500 ease-in-out" style="transform: translateX(0%);">
                            <?php if(!empty($data['transformations'])): ?>
                                <?php foreach($data['transformations'] as $transform): ?>
                                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2">
                                    <img src="<?php echo htmlspecialchars($transform['afterImage']); ?>" class="w-full h-[200px] object-cover rounded-lg shadow-sm" alt="<?php echo htmlspecialchars($transform['category']); ?>"/>
                                </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                    <!-- Carousel Arrows -->
                    <button id="t-prev" class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button id="t-next" class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
            <script>
                document.addEventListener('DOMContentLoaded', () => {
                    const tSlider = document.getElementById('transform-slider');
                    const tPrev = document.getElementById('t-prev');
                    const tNext = document.getElementById('t-next');
                    if(tSlider && tSlider.children.length > 0) {
                        const total = tSlider.children.length;
                        let tIndex = 0;
                        
                        function getTVisible() {
                            if (window.innerWidth >= 1024) return 4;
                            if (window.innerWidth >= 768) return 3;
                            if (window.innerWidth >= 640) return 2;
                            return 1;
                        }

                        function updateTSlider() {
                            const visible = getTVisible();
                            if(tIndex > total - visible) tIndex = total - visible;
                            if(tIndex < 0) tIndex = 0;
                            const pct = 100 / visible;
                            tSlider.style.transform = `translateX(-${tIndex * pct}%)`;
                        }

                        tNext.addEventListener('click', () => {
                            const visible = getTVisible();
                            if (tIndex < total - visible) { tIndex++; updateTSlider(); }
                        });
                        tPrev.addEventListener('click', () => {
                            if (tIndex > 0) { tIndex--; updateTSlider(); }
                        });
                        window.addEventListener('resize', updateTSlider);
                    }
                });
            </script>
        </section>

        <!-- Reels Section -->
        <section class="py-16 bg-[#fffdfc] dark:bg-card border-t border-gray-100 dark:border-border">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-2xl font-headline font-bold text-[#0a142f] dark:text-white mb-2 tracking-wide uppercase">TRENDING <span class="text-primary">REELS</span></h2>
                <p class="text-gray-600 dark:text-gray-300 text-[13px] mb-12">Watch our latest work and transformations</p>
                
                <?php if(!empty($data['reels'])): ?>
                <div class="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] justify-start md:justify-center px-4">
                    <?php foreach($data['reels'] as $reel): ?>
                    <div class="shrink-0 w-[260px] snap-center bg-white dark:bg-background rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden border border-gray-100 dark:border-border flex flex-col">
                        <div class="relative aspect-[9/16] bg-black w-full">
                            <video src="<?php echo htmlspecialchars($reel['videoUrl']); ?>" class="absolute inset-0 w-full h-full object-cover" controls preload="metadata"></video>
                        </div>
                        <div class="p-4 text-center bg-white dark:bg-background">
                            <h4 class="font-bold text-[13px] text-[#0a142f] dark:text-white tracking-wide"><?php echo htmlspecialchars($reel['title']); ?></h4>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
                <?php else: ?>
                <p class="text-gray-500 dark:text-gray-400 italic">More amazing reels coming soon!</p>
                <?php endif; ?>
            </div>
        </section>

        <!-- Premium Services -->
        <section class="py-16 bg-white dark:bg-background border-t border-gray-100 dark:border-border">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-2xl font-headline font-bold text-[#0a142f] dark:text-white mb-2 tracking-wide uppercase">OUR <span class="text-primary">PREMIUM</span> SERVICES</h2>
                <div class="flex justify-center mb-12 items-center text-primary">
                    <span class="block w-8 h-px bg-primary/30 mr-2"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    <span class="block w-8 h-px bg-primary/30 ml-2"></span>
                </div>
                
                <div class="relative w-full mx-auto mb-12 overflow-hidden px-2">
                    <div id="services-slider" class="flex transition-transform duration-500 ease-in-out">
                    <?php 
                    $icons = [
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8M12 22V12M8 12V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10"/></svg>',
                        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>'
                    ];
                    foreach($data['services'] as $index => $service): 
                    ?>
                    <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-3 pb-8">
                        <div class="bg-white dark:bg-background rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-border flex flex-col text-left h-full overflow-hidden">
                            <div class="relative h-48 w-full shrink-0">
                                <img src="<?php echo htmlspecialchars($service['imageUrl']); ?>" alt="<?php echo htmlspecialchars($service['title']); ?>" class="w-full h-full object-cover"/>
                                <!-- Circular Icon overlapping -->
                                <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-background flex items-center justify-center text-primary shadow-md border-2 border-white">
                                    <?php echo $icons[$index % 4]; ?>
                                </div>
                            </div>
                            <div class="pt-10 pb-6 px-6 flex-grow flex flex-col text-center">
                                <h4 class="text-[15px] font-bold text-primary uppercase tracking-wide mb-3"><?php echo htmlspecialchars($service['title']); ?></h4>
                                <p class="text-[13px] text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow"><?php echo htmlspecialchars($service['desc']); ?></p>
                                <a href="/services.html" class="text-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:text-primary/80 transition-colors">
                                    KNOW MORE 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                    </div>
                </div>

                <script>
                document.addEventListener('DOMContentLoaded', () => {
                    const slider = document.getElementById('services-slider');
                    if(slider && slider.children.length > 0) {
                        const totalSlides = slider.children.length;
                        let currentIndex = 0;

                        function getVisibleItems() {
                            if (window.innerWidth >= 1280) return 4;
                            if (window.innerWidth >= 1024) return 3;
                            if (window.innerWidth >= 640) return 2;
                            return 1;
                        }

                        function updateSlider() {
                            const visible = getVisibleItems();
                            if (currentIndex > totalSlides - visible) {
                                currentIndex = 0;
                            }
                            const slidePercentage = 100 / visible;
                            slider.style.transform = `translateX(-${currentIndex * slidePercentage}%)`;
                        }

                        if(totalSlides > 1) {
                            setInterval(() => {
                                const visible = getVisibleItems();
                                if (currentIndex >= totalSlides - visible) {
                                    currentIndex = 0;
                                } else {
                                    currentIndex++;
                                }
                                updateSlider();
                            }, 3000);
                            
                            window.addEventListener('resize', () => {
                                updateSlider();
                            });
                        }
                    }
                });
                </script>
                
                <a href="/services.html" class="inline-block border border-primary text-primary px-8 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors">
                    VIEW ALL SERVICES
                </a>
            </div>
        </section>

        <!-- Academy Section -->
        <section class="py-16 bg-white dark:bg-background">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-[#fff5f7] dark:bg-card rounded-[2rem] p-6 md:p-10 border border-pink-100 dark:border-border shadow-sm">
                    <div class="flex flex-col gap-12">
                        <!-- Top Row: Images and Info -->
                        <div class="grid lg:grid-cols-2 gap-8 items-center">
                        
                        <!-- Left Collage -->
                        <div class="grid grid-cols-2 grid-rows-2 gap-2 h-[400px]">
    <?php if(!empty($data['academyInfo']['images'])): ?>
        <?php if(!empty($data['academyInfo']['images'][0])): ?><img src="<?php echo htmlspecialchars($data['academyInfo']['images'][0]); ?>" class="col-span-2 w-full h-full object-cover rounded-lg shadow-sm" alt="Class"/><?php endif; ?>
        <?php if(!empty($data['academyInfo']['images'][1])): ?><img src="<?php echo htmlspecialchars($data['academyInfo']['images'][1]); ?>" class="w-full h-full object-cover rounded-lg shadow-sm" alt="Practice 1"/><?php endif; ?>
        <?php if(!empty($data['academyInfo']['images'][2])): ?><img src="<?php echo htmlspecialchars($data['academyInfo']['images'][2]); ?>" class="w-full h-full object-cover rounded-lg shadow-sm" alt="Practice 2"/><?php endif; ?>
    <?php endif; ?>
</div>
                        
                        <!-- Middle Checklist -->
                        <div class="flex flex-col justify-center px-4 md:px-8 text-center lg:text-left">
                            <h3 class="text-primary text-lg font-bold tracking-widest uppercase mb-1"><?php echo htmlspecialchars($data["academyInfo"]["subtitle"] ?? ""); ?></h3>
                            <h2 class="text-3xl md:text-4xl font-headline font-bold text-[#0a142f] dark:text-white mb-8"><?php echo htmlspecialchars($data["academyInfo"]["title"] ?? ""); ?></h2>
                            
                            <ul class="space-y-4 mb-8 mx-auto lg:mx-0 inline-block text-left">
    <?php if(!empty($data['academyInfo']['features'])): ?>
        <?php foreach($data['academyInfo']['features'] as $feature): ?>
        <li class="flex items-center gap-3 text-sm font-semibold text-[#0a142f] dark:text-white">
            <div class="w-5 h-5 rounded-full border border-primary text-primary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <?php echo htmlspecialchars($feature); ?>
        </li>
        <?php endforeach; ?>
    <?php endif; ?>
</ul>
                            
                            <p class="text-[11px] font-bold text-[#0a142f] dark:text-white tracking-widest mb-1">LIMITED SEATS PER BATCH!</p>
                            <div class="flex items-center justify-center lg:justify-start gap-2 text-primary font-accent text-3xl">
                                Book Your Seat Now!
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <!-- Bottom Row: Course Cards -->
                    <div class="border-t border-pink-200 dark:border-border pt-8 mt-2">
                        <h3 class="text-xl font-headline font-bold text-center text-[#0a142f] dark:text-white mb-8 tracking-wide">EXPLORE OUR <span class="text-primary">COURSES</span></h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <?php foreach($data['courses'] as $course): ?>
                            <div class="bg-white dark:bg-background rounded-xl shadow-md border border-gray-100 dark:border-border overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                                <img src="<?php echo htmlspecialchars($course['imageUrl']); ?>" class="w-full h-[180px] object-cover" alt="<?php echo htmlspecialchars($course['title']); ?>"/>
                                <div class="p-6 text-center bg-[#fffdfc] dark:bg-card flex-grow flex flex-col justify-between">
                                    <div>
                                        <h4 class="font-headline font-bold text-sm text-[#0a142f] dark:text-white uppercase mb-2 tracking-wide"><?php echo htmlspecialchars($course['title']); ?></h4>
                                        <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">Duration: <?php echo htmlspecialchars($course['duration']); ?></p>
                                    </div>
                                    <div>
                                        <p class="text-2xl font-bold text-[#0a142f] dark:text-white mb-4"><?php echo htmlspecialchars($course['price']); ?></p>
                                        <a href="/enroll.html" class="block w-full bg-primary text-white py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm">ENROLL NOW</a>
                                    </div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="py-16 bg-[#fafafa] dark:bg-secondary border-y border-gray-100 dark:border-border">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-2xl font-headline font-bold text-[#0a142f] dark:text-white mb-12 tracking-wide uppercase">WHY CHOOSE GLAM HOUSE?</h2>
                
                <?php 
$whyIcons = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'
];
?>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <?php if(!empty($data['whyChooseUs'])): ?>
        <?php foreach(array_slice($data['whyChooseUs'], 0, 4) as $idx => $reason): ?>
        <div class="flex flex-col items-center text-center gap-4 px-4">
            <div class="w-16 h-16 rounded-full border border-primary text-primary flex items-center justify-center shrink-0 bg-white dark:bg-card shadow-sm">
                <?php echo $whyIcons[$idx % 4]; ?>
            </div>
            <div>
                <h4 class="font-bold text-[12px] uppercase tracking-wider text-[#0a142f] dark:text-white mb-2"><?php echo htmlspecialchars($reason['title']); ?></h4>
                <p class="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed"><?php echo htmlspecialchars($reason['desc']); ?></p>
            </div>
        </div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="py-16 bg-white dark:bg-background">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-2xl font-headline font-bold text-primary mb-12 tracking-wide uppercase">WHAT OUR CLIENTS SAY</h2>
                
                <div class="relative px-12">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <?php foreach($data['testimonials'] as $item): ?>
                        <div class="bg-white dark:bg-background border border-pink-100 dark:border-border shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-xl p-6 relative flex flex-col text-center items-center">
                            <div class="w-full flex justify-between items-start mb-4 px-2">
                                <img src="<?php echo htmlspecialchars($item['imageUrl']); ?>" class="w-12 h-12 rounded-full object-cover border border-gray-100 dark:border-border shadow-sm" alt="<?php echo htmlspecialchars($item['name']); ?>"/>
                                <span class="text-primary text-5xl leading-none font-serif opacity-80 pt-2">"</span>
                            </div>
                            <h4 class="font-bold text-[13px] text-[#0a142f] dark:text-white mb-1"><?php echo htmlspecialchars($item['name']); ?></h4>
                            <div class="flex justify-center gap-1 mb-4 text-[#facc15]">
                                <?php for($i=0; $i<5; $i++): ?>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
                                <?php endfor; ?>
                            </div>
                            <p class="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed italic px-2">"<?php echo htmlspecialchars($item['review']); ?>"</p>
                        </div>
                        <?php endforeach; ?>
                    </div>
                    <!-- Carousel Arrows -->
                    <button class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button class="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Instagram -->
        <section class="py-16 bg-white dark:bg-background border-t border-gray-100 dark:border-border">
            <div class="max-w-7xl mx-auto text-center px-4">
                <h2 class="text-xl font-headline font-bold text-[#0a142f] dark:text-white mb-8 tracking-wide uppercase">FOLLOW US ON <span class="text-primary">INSTAGRAM</span></h2>
                
                <div class="flex overflow-hidden justify-center mb-8 gap-3 max-w-[1000px] mx-auto">
    <?php if(!empty($data['instagramImages'])): ?>
        <?php foreach($data['instagramImages'] as $idx => $imgUrl): 
            $hiddenClasses = '';
            if ($idx == 1) $hiddenClasses = 'hidden sm:block';
            if ($idx == 2) $hiddenClasses = 'hidden md:block';
            if ($idx == 3) $hiddenClasses = 'hidden lg:block';
            if ($idx >= 4) $hiddenClasses = 'hidden xl:block';
        ?>
        <img src="<?php echo htmlspecialchars($imgUrl); ?>" class="w-[150px] h-[150px] object-cover rounded-md shadow-sm shrink-0 <?php echo $hiddenClasses; ?>" alt="IG <?php echo $idx; ?>"/>
        <?php endforeach; ?>
    <?php endif; ?>
</div>
                
                <a href="https://instagram.com/the_glam_house_salon" target="_blank" class="inline-block border border-primary text-primary px-8 py-2.5 rounded text-[11px] font-bold tracking-wider hover:bg-primary hover:text-white transition-colors">
                    @the_glam_house_salon
                </a>
            </div>
        </section>

        <!-- CTA Banner -->
        <section class="py-12 bg-white dark:bg-background pb-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#fff5f7] dark:bg-card rounded-xl p-8 lg:px-12 border border-pink-100 dark:border-border shadow-sm relative overflow-hidden">
                    <!-- Decorative abstract leaves -->
                    <div class="absolute left-0 top-0 w-32 h-32 opacity-20 bg-[url('/public/images/leaves.png')] bg-no-repeat bg-contain -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
                    <div class="absolute right-0 bottom-0 w-48 h-48 opacity-20 bg-[url('/public/images/leaves.png')] bg-no-repeat bg-contain translate-x-1/4 translate-y-1/4 mix-blend-multiply rotate-180"></div>
                    
                    <div class="text-center lg:text-left relative z-10">
                        <h2 class="text-2xl font-headline font-bold text-[#0a142f] dark:text-white mb-2">READY FOR YOUR TRANSFORMATION?</h2>
                        <p class="text-gray-600 dark:text-gray-300 text-[15px]">Let our experts bring out the most beautiful you.</p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 relative z-10">
                        <a href="https://wa.me/917087657000" target="_blank" class="inline-flex items-center justify-center gap-2 bg-[#D82B68] text-white px-8 py-3.5 rounded text-[11px] font-bold uppercase tracking-wider hover:bg-[#c0235b] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                            BOOK ON WHATSAPP
                        </a>
                        <a href="/book.html" class="inline-flex items-center justify-center gap-2 bg-white dark:bg-background text-[#0a142f] dark:text-white border border-gray-200 dark:border-border px-8 py-3.5 rounded text-[11px] font-bold uppercase tracking-wider hover:bg-gray-50 dark:bg-secondary transition-colors shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                            SCHEDULE APPOINTMENT
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </main>

<?php
include __DIR__ . '/includes/footer.php';
?>
