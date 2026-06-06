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
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              border: "hsl(var(--border))",
              input: "hsl(var(--input))",
              ring: "hsl(var(--ring))",
              background: "hsl(var(--background))",
              foreground: "hsl(var(--foreground))",
              primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
              },
              secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
              },
              destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
              },
              muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
              },
              accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
              },
              popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
              },
              card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
              },
            },
            fontFamily: {
              headline: ["Playfair Display", "serif"],
              body: ["Poppins", "sans-serif"],
              accent: ["Dancing Script", "cursive"],
            }
          }
        }
      }
    </script>
</head>
<body class="font-body antialiased min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4 bg-transparent bg-background/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
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
