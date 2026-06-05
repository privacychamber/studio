<?php
require_once __DIR__ . '/includes/data.php';
include __DIR__ . '/includes/header.php';
?>

    <!-- Main Content -->
    <main class="flex-grow pt-24">
        <!-- Hero Section -->
        <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            <div class="absolute inset-0 w-full h-full">
                <img src="/studio/images/IMG_8741.jpeg" class="w-full h-full object-cover opacity-[0.15]" alt="Hero Background"/>
                <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div class="container relative z-10 px-4 text-center mt-20">
                <p class="text-primary font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6">Mohali's Premium Beauty Destination</p>
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-headline font-bold text-foreground leading-[0.9] mb-8">
                    THE GLAM <br/> <span class="italic text-primary">HOUSE</span>
                </h1>
                <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
                    Experience flawless permanent makeup, advanced hair treatments, and professional academy courses.
                </p>
                <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a href="/services.html" class="inline-flex justify-center items-center h-14 px-8 rounded-full bg-primary text-white font-bold tracking-widest uppercase text-sm shadow-xl transition-transform hover:scale-105">Our Services</a>
                    <a href="/academy.html" class="inline-flex justify-center items-center h-14 px-8 rounded-full border-2 border-primary text-primary font-bold tracking-widest uppercase text-sm transition-transform hover:scale-105">Join Academy</a>
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
