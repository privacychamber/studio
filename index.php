<?php
require_once __DIR__ . '/includes/data.php';
include __DIR__ . '/includes/header.php';
?>

    <!-- Main Content -->
    <main class="flex-grow pt-24">
        <!-- Hero Section -->
        <section class="relative min-h-[90vh] pt-32 pb-20 overflow-hidden bg-[#fffdfc] dark:bg-background">
            <!-- Subtle background circle for the oval frame -->
            <div class="absolute right-0 top-0 w-[80%] md:w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 pointer-events-none"></div>
            
            <div class="max-w-[1500px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
                <!-- Left Column: Typography & CTAs -->
                <div class="flex flex-col items-start text-left space-y-8 mt-12 lg:mt-0">
                    <div class="space-y-4">
                        <p class="font-accent text-primary text-3xl md:text-5xl drop-shadow-sm">Enhance. Elevate. Empower.</p>
                        <h1 class="text-5xl md:text-7xl lg:text-8xl font-headline font-bold leading-[1.05] text-foreground">
                            FLAWLESS <br/>
                            <span class="text-primary">BEAUTY</span> <br/>
                            STARTS HERE
                        </h1>
                    </div>
                    
                    <p class="text-base md:text-lg text-muted-foreground font-medium border-l-4 border-primary pl-4 py-1">
                        Permanent Makeup | Hair Treatments | <br class="hidden sm:block"/>
                        Lash &amp; Brow | Skin | Certified Courses
                    </p>
                    
                    <div class="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                        <a href="/book.html" class="inline-flex items-center justify-center gap-2 h-14 px-8 w-full sm:w-auto rounded-md bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
                            BOOK APPOINTMENT
                        </a>
                        <a href="/academy.html" class="inline-flex items-center justify-center gap-2 h-14 px-8 w-full sm:w-auto rounded-md border-2 border-primary/20 hover:border-primary text-foreground font-bold text-xs uppercase tracking-widest transition-all hover:bg-primary/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                            EXPLORE COURSES
                        </a>
                    </div>
                    
                    <!-- Trust Badges -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-6 border-t border-primary/10 w-full">
                        <div class="flex flex-col md:flex-row items-start md:items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-foreground">1000+</p>
                                <p class="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">Happy Clients</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-start md:items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-foreground">Certified</p>
                                <p class="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">Beauty Academy</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-start md:items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-foreground">Premium Salon</p>
                                <p class="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">in Your City</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-start md:items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-foreground">Hygienic &amp; Safe</p>
                                <p class="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">Environment</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Oval Slider Frame & Floating Cards -->
                <div class="relative w-full h-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0 pb-10">
                    <!-- The Main Oval Frame -->
                    <div class="relative w-[300px] h-[450px] sm:w-[400px] sm:h-[600px] md:w-[450px] md:h-[650px] rounded-[200px] overflow-hidden shadow-2xl border-8 border-white dark:border-card group z-10 bg-muted">
                        <!-- Images for Slider -->
                        <div id="hero-slider" class="relative w-full h-full">
                            <img src="https://picsum.photos/seed/salon1/600/800" class="absolute inset-0 w-full h-full object-cover slider-img transition-opacity duration-1000 z-10" alt="Beautiful Model"/>
                            <img src="https://picsum.photos/seed/salon2/600/800" class="absolute inset-0 w-full h-full object-cover slider-img transition-opacity duration-1000 opacity-0 z-0" alt="Salon Service"/>
                            <img src="https://picsum.photos/seed/salon3/600/800" class="absolute inset-0 w-full h-full object-cover slider-img transition-opacity duration-1000 opacity-0 z-0" alt="Permanent Makeup"/>
                        </div>
                        <!-- Slider Controls Overlay -->
                        <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4 z-20 pointer-events-none">
                            <button id="hero-prev" class="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg text-primary transition-transform hover:scale-110 pointer-events-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button id="hero-next" class="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg text-primary transition-transform hover:scale-110 pointer-events-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>

                    <!-- Floating Service Cards -->
                    <div class="absolute -right-2 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 hidden md:flex">
                        <!-- Card 1 -->
                        <div class="bg-white/95 dark:bg-card/95 backdrop-blur-md p-2.5 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-primary/10 w-[160px] transform hover:-translate-y-1 transition-transform">
                            <p class="text-[11px] font-bold text-center uppercase tracking-widest text-foreground mb-2">BROWS</p>
                            <div class="grid grid-rows-2 gap-1.5 h-[100px]">
                                <img src="https://picsum.photos/seed/brows1/200/100" class="w-full h-full object-cover rounded-md" alt="Brows Before"/>
                                <img src="https://picsum.photos/seed/brows2/200/100" class="w-full h-full object-cover rounded-md" alt="Brows After"/>
                            </div>
                        </div>
                        
                        <!-- Card 2 -->
                        <div class="bg-white/95 dark:bg-card/95 backdrop-blur-md p-2.5 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-primary/10 w-[160px] transform hover:-translate-y-1 transition-transform translate-x-4">
                            <p class="text-[11px] font-bold text-center uppercase tracking-widest text-foreground mb-2">HAIR</p>
                            <div class="grid grid-cols-2 gap-1.5 h-[80px]">
                                <img src="https://picsum.photos/seed/hair1/100/100" class="w-full h-full object-cover rounded-md" alt="Hair Style 1"/>
                                <img src="https://picsum.photos/seed/hair2/100/100" class="w-full h-full object-cover rounded-md" alt="Hair Style 2"/>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="bg-white/95 dark:bg-card/95 backdrop-blur-md p-2.5 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-primary/10 w-[160px] transform hover:-translate-y-1 transition-transform">
                            <p class="text-[11px] font-bold text-center uppercase tracking-widest text-foreground mb-2">LIPS</p>
                            <div class="grid grid-rows-2 gap-1.5 h-[100px]">
                                <img src="https://picsum.photos/seed/lips1/200/100" class="w-full h-full object-cover rounded-md" alt="Lips Tint"/>
                                <img src="https://picsum.photos/seed/lips2/200/100" class="w-full h-full object-cover rounded-md" alt="Lips Blush"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-32 bg-card">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div class="max-w-2xl">
                        <h2 class="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">What We Do</h2>
                        <h3 class="text-4xl md:text-5xl font-headline font-bold text-foreground">SIGNATURE SERVICES</h3>
                    </div>
                    <a href="/services.html" class="text-sm font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors flex items-center gap-2">View All Services →</a>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <?php foreach(array_slice($data['services'], 0, 4) as $index => $service): ?>
                    <div class="bg-background rounded-3xl overflow-hidden shadow-xl border border-primary/5 hover:-translate-y-2 transition-transform duration-300 group">
                        <div class="relative h-64 overflow-hidden">
                            <img src="<?php echo htmlspecialchars($service['imageUrl']); ?>" alt="<?php echo htmlspecialchars($service['title']); ?>" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-4 left-4 right-4">
                                <h4 class="text-xl font-bold text-white mb-1"><?php echo htmlspecialchars($service['title']); ?></h4>
                                <p class="text-primary font-bold"><?php echo htmlspecialchars($service['price']); ?></p>
                            </div>
                        </div>
                        <div class="p-6">
                            <p class="text-sm text-muted-foreground line-clamp-2 mb-6"><?php echo htmlspecialchars($service['desc']); ?></p>
                            <a href="/book.html" class="block w-full text-center py-3 rounded-full border border-primary/20 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Book Now</a>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <!-- Courses Section -->
        <section class="py-24 bg-[#fdf8f5]">
            <div class="container mx-auto px-4">
                <div class="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-primary/5">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl">
                                <img src="/studio/images/IMG_1413.JPG.jpeg" class="w-full h-full object-cover" alt="Training"/>
                            </div>
                            <div class="space-y-4 pt-12">
                                <div class="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                                    <img src="/studio/images/IMG_0722.JPG.jpeg" class="w-full h-full object-cover" alt="Practical"/>
                                </div>
                                <div class="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-xl bg-accent p-6 flex flex-col justify-center text-white">
                                    <p class="text-3xl font-bold mb-1">100%</p>
                                    <p class="text-[10px] font-bold uppercase tracking-widest">Placement Assistance</p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-8">
                            <div>
                                <h3 class="text-accent text-sm font-bold tracking-[0.4em] uppercase mb-4">Glam House Academy</h3>
                                <h2 class="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
                                    START YOUR CAREER IN <br />
                                    <span class="text-primary italic">BEAUTY INDUSTRY</span>
                                </h2>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <?php foreach($data['courses'] as $course): ?>
                                <div class="overflow-hidden shadow-xl rounded-3xl bg-secondary/20 hover:bg-secondary/40 transition-colors">
                                    <div class="p-6">
                                        <h4 class="text-sm font-bold uppercase tracking-widest mb-2"><?php echo htmlspecialchars($course['title']); ?></h4>
                                        <div class="flex items-center gap-2 text-muted-foreground mb-4 text-[10px] font-bold uppercase tracking-widest">
                                            <span><?php echo htmlspecialchars($course['duration']); ?></span>
                                        </div>
                                        <p class="text-2xl font-bold text-primary mb-4"><?php echo htmlspecialchars($course['price']); ?></p>
                                        <a href="/enroll.html" class="block w-full text-center bg-foreground text-background hover:bg-primary rounded-full text-[10px] font-bold uppercase tracking-widest py-4 transition-colors">Enroll Now</a>
                                    </div>
                                </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="py-32 bg-background">
            <div class="container mx-auto px-4 text-center">
                <div class="max-w-2xl mx-auto mb-20">
                    <h2 class="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4">Wall of Love</h2>
                    <h3 class="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">WHAT OUR GUESTS SAY</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <?php foreach($data['testimonials'] as $item): ?>
                    <div class="bg-white dark:bg-card border border-primary/5 shadow-lg p-10 rounded-[3rem] relative flex flex-col items-center pt-20 mt-10 hover:shadow-2xl transition-all">
                        <div class="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-8 border-background shadow-xl">
                            <img src="<?php echo htmlspecialchars($item['imageUrl']); ?>" class="w-full h-full object-cover" alt="<?php echo htmlspecialchars($item['name']); ?>"/>
                        </div>
                        <p class="text-sm text-foreground/80 text-center font-medium leading-relaxed mb-6 italic">"<?php echo htmlspecialchars($item['review']); ?>"</p>
                        <h4 class="font-bold text-xs uppercase tracking-[0.2em] text-foreground mt-auto"><?php echo htmlspecialchars($item['name']); ?></h4>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

    </main>

<?php
include __DIR__ . '/includes/footer.php';
?>
