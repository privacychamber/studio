<?php
// Define the path to the database (same as api/data.php)
$db_path = __DIR__ . '/../data/db.json';

$data = [
    'services' => [
        ['id' => '1', 'title' => 'Keratin Treatment', 'desc' => 'Transform your hair with our premium keratin treatment for smooth, frizz-free results.', 'price' => '₹3,999/-', 'imageUrl' => 'https://picsum.photos/seed/hair1/600/400'],
        ['id' => '2', 'title' => 'Microblading', 'desc' => 'Get perfectly shaped, natural-looking brows that frame your face beautifully.', 'price' => '₹4,999/-', 'imageUrl' => 'https://picsum.photos/seed/brows1/600/400'],
        ['id' => '3', 'title' => 'Lash Extensions', 'desc' => 'Wake up with flawless, voluminous lashes every single day.', 'price' => '₹1,999/-', 'imageUrl' => 'https://picsum.photos/seed/lashes1/600/400'],
        ['id' => '4', 'title' => 'Hair Color', 'desc' => 'Expert color formulation for a stunning, dimensional look that suits you.', 'price' => '₹2,499/-', 'imageUrl' => 'https://picsum.photos/seed/haircolor1/600/400'],
    ],
    'courses' => [
        ['id' => '1', 'title' => 'NAIL COURSE', 'duration' => '15 Days', 'price' => '₹14,999/-', 'imageUrl' => 'https://picsum.photos/seed/nail/400/300'],
        ['id' => '2', 'title' => 'EYELASH COURSE', 'duration' => '7 Days', 'price' => '₹9,999/-', 'imageUrl' => 'https://picsum.photos/seed/lash/400/300'],
    ],
    'testimonials' => [
        ['id' => '1', 'name' => 'Neha Sharma', 'review' => 'The best keratin treatment I\'ve ever had! My hair feels amazing and looks so healthy.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=1'],
        ['id' => '2', 'name' => 'Pooja Verma', 'review' => 'Microblading done perfectly! My brows look so natural. Highly recommended.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=2'],
        ['id' => '3', 'name' => 'Priya Mehta', 'review' => 'Lash extensions are just perfect. The team is so professional and friendly.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=3'],
        ['id' => '4', 'name' => 'Ankita Singh', 'review' => 'Joined the nail course and it changed my career! Best academy in the city.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=4'],
    ]
];

if (file_exists($db_path)) {
    $json = file_get_contents($db_path);
    if ($json !== false) {
        $parsed = json_decode($json, true);
        if ($parsed) {
            $data = $parsed;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="preload" as="image" href="/studio/logo.png"/>
    <link rel="stylesheet" href="/style.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
    <title>THE GLAM HOUSE — Salon &amp; Academy | Mohali</title>
    <meta name="description" content="Flawless Beauty Starts Here. Premium Permanent Makeup, Hair Treatments, Lash &amp; Brow Services, and Certified Beauty Courses in Mohali."/>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;family=Playfair+Display:wght@400;700&amp;family=Dancing+Script:wght@400;700&amp;display=swap" rel="stylesheet"/>
</head>
<body class="font-body antialiased min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 bg-transparent bg-background/80 backdrop-blur-md">
        <div class="max-w-[1500px] mx-auto flex items-center justify-between">
            <a class="flex items-center group flex-shrink-0 transition-transform hover:scale-105 relative z-10" href="/">
                <div class="bg-white p-2 rounded-full shadow-lg border border-primary/10">
                    <img alt="The Glam House Logo" width="140" height="140" decoding="async" class="w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-contain" src="/studio/logo.png"/>
                </div>
            </a>
            <div class="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 ml-6">
                <a class="text-[11px] xl:text-[12px] font-bold tracking-[0.1em] xl:tracking-[0.15em] transition-all hover:text-primary relative group/link text-primary" href="/">HOME<span class="absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-full"></span></a>
                <a class="text-[11px] xl:text-[12px] font-bold tracking-[0.1em] xl:tracking-[0.15em] transition-all hover:text-primary relative group/link text-foreground/80" href="/services.html">SERVICES<span class="absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover/link:w-full"></span></a>
                <a class="text-[11px] xl:text-[12px] font-bold tracking-[0.1em] xl:tracking-[0.15em] transition-all hover:text-primary relative group/link text-foreground/80" href="/academy.html">ACADEMY<span class="absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover/link:w-full"></span></a>
                <a class="text-[11px] xl:text-[12px] font-bold tracking-[0.1em] xl:tracking-[0.15em] transition-all hover:text-primary relative group/link text-foreground/80" href="/gallery.html">GALLERY<span class="absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover/link:w-full"></span></a>
                <a class="text-[11px] xl:text-[12px] font-bold tracking-[0.1em] xl:tracking-[0.15em] transition-all hover:text-primary relative group/link text-foreground/80" href="/about.html">ABOUT US<span class="absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover/link:w-full"></span></a>
                <a class="text-[11px] xl:text-[12px] font-bold tracking-[0.1em] xl:tracking-[0.15em] transition-all hover:text-primary relative group/link text-foreground/80" href="/reviews.html">REVIEWS<span class="absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover/link:w-full"></span></a>
                <a class="text-[11px] xl:text-[12px] font-bold tracking-[0.1em] xl:tracking-[0.15em] transition-all hover:text-primary relative group/link text-foreground/80" href="/contact.html">CONTACT<span class="absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 w-0 group-hover/link:w-full"></span></a>
            </div>
            <div class="flex items-center gap-3 xl:gap-6 ml-auto">
                <a class="items-center justify-center whitespace-nowrap bg-primary hover:bg-primary/90 py-2 hidden sm:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold rounded-full px-4 xl:px-6 h-11 text-[9px] xl:text-[10px] uppercase tracking-[0.1em] xl:tracking-[0.15em] shadow-xl transition-all" href="/book.html">BOOK APPOINTMENT</a>
                <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium hover:text-accent-foreground h-10 w-10 rounded-full hover:bg-primary/10 text-primary" aria-label="Toggle theme">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon w-5 h-5"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                </button>
                <button class="inline-flex items-center justify-center h-10 w-10 lg:hidden text-primary" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
    </nav>

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

    <!-- Footer -->
    <footer class="bg-white dark:bg-card pt-24 pb-12 border-t border-primary/5 mt-auto relative overflow-hidden">
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mb-32"></div>
        <div class="max-w-[1500px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 relative z-10">
            <div class="flex flex-col items-start gap-6">
                <a class="flex items-center group transition-transform hover:scale-105" href="/">
                    <div class="w-[120px] h-[120px] relative bg-white rounded-full p-2 shadow-md border border-primary/5">
                        <img alt="The Glam House Logo" class="object-contain p-2 w-full h-full" src="/studio/logo.png"/>
                    </div>
                </a>
                <p class="text-xs font-medium text-muted-foreground leading-relaxed max-w-xs">Where luxury meets skill. We provide premium beauty transformations and world-class academy training in Mohali.</p>
            </div>
            <div class="space-y-6">
                <h3 class="font-bold text-xs uppercase tracking-[0.3em] text-primary">QUICK LINKS</h3>
                <div class="grid grid-cols-2 gap-y-3">
                    <a class="text-foreground/70 hover:text-primary transition-all text-[11px] font-bold tracking-wider uppercase" href="/">Home</a>
                    <a class="text-foreground/70 hover:text-primary transition-all text-[11px] font-bold tracking-wider uppercase" href="/services.html">Services</a>
                    <a class="text-foreground/70 hover:text-primary transition-all text-[11px] font-bold tracking-wider uppercase" href="/academy.html">Academy</a>
                    <a class="text-foreground/70 hover:text-primary transition-all text-[11px] font-bold tracking-wider uppercase" href="/gallery.html">Gallery</a>
                    <a class="text-foreground/70 hover:text-primary transition-all text-[11px] font-bold tracking-wider uppercase" href="/about.html">About Us</a>
                    <a class="text-foreground/70 hover:text-primary transition-all text-[11px] font-bold tracking-wider uppercase" href="/contact.html">Contact</a>
                </div>
            </div>
            <div class="space-y-6">
                <h3 class="font-bold text-xs uppercase tracking-[0.3em] text-primary">CONTACT US</h3>
                <ul class="space-y-5">
                    <li class="flex items-start gap-4">
                        <a href="tel:+917087657000" class="text-foreground/80 hover:text-primary transition-colors text-[11px] font-bold tracking-wider mt-2">70876 57000</a>
                    </li>
                    <li class="flex items-start gap-4">
                        <a href="mailto:theglamhouse.salon@gmail.com" class="text-foreground/80 hover:text-primary transition-colors text-[11px] font-bold tracking-wider mt-2 break-all">theglamhouse.salon@gmail.com</a>
                    </li>
                    <li class="flex items-start gap-4">
                        <p class="text-foreground/80 text-[11px] font-bold tracking-wider leading-relaxed mt-2">Sco No. 122, Phase 1&amp;2, M&amp;M Market,<br/>Sector 60, Mohali, Punjab 160059</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="max-w-[1500px] mx-auto px-6 mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-bold tracking-[0.1em] uppercase">
            <p>© 2024 The Glam House Salon &amp; Academy. All Rights Reserved.</p>
        </div>
    </footer>

    <script src="/script.js"></script>
</body>
</html>
