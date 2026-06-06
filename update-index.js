const fs = require('fs');
let content = fs.readFileSync('index.php', 'utf8');

// 1. Hero text replacements
content = content.replace(
  '<p class="font-accent text-primary text-3xl md:text-4xl mb-4">Enhance. Elevate. Empower.</p>',
  '<?php if(!empty($data["hero"])): ?>\n<p class="font-accent text-primary text-3xl md:text-4xl mb-4"><?php echo htmlspecialchars($data["hero"]["tagline"] ?? ""); ?></p>'
);
content = content.replace(
  /<h1 class="text-5xl md:text-\[5\.5rem\] font-headline font-bold leading-\[1\.05\] text-\[\#0a142f\] dark:text-white mb-6">[\s\S]*?<\/h1>/,
  `<h1 class="text-5xl md:text-[5.5rem] font-headline font-bold leading-[1.05] text-[#0a142f] dark:text-white mb-6">
    <?php echo htmlspecialchars($data['hero']['headlinePart1'] ?? ''); ?><br/>
    <span class="text-primary"><?php echo htmlspecialchars($data['hero']['headlineHighlight'] ?? ''); ?></span><br/>
    <?php echo htmlspecialchars($data['hero']['headlinePart2'] ?? ''); ?>
</h1>`
);
content = content.replace(
  /<p class="text-\[\#4b5563\] dark:text-gray-300 text-lg font-medium mb-8">[\s\S]*?<\/p>/,
  `<p class="text-[#4b5563] dark:text-gray-300 text-lg font-medium mb-8">
    <?php echo htmlspecialchars($data['hero']['subtext'] ?? ''); ?>
</p>\n<?php endif; ?>`
);

// 2. Hero Image
content = content.replace(
  /<img src="\/public\/images\/IMG_0568\.JPG\.jpeg" alt="Model" class="w-full h-full object-cover object-top" \/>/,
  `<?php if(!empty($data['hero']['mainImage'])): ?>
    <img src="<?php echo htmlspecialchars($data['hero']['mainImage']); ?>" alt="Model" class="w-full h-full object-cover object-top" />
  <?php else: ?>
    <img src="/public/images/IMG_0568.JPG.jpeg" alt="Model" class="w-full h-full object-cover object-top" />
  <?php endif; ?>`
);

// 3. Transformations carousel
content = content.replace(
  /<div class="flex items-center gap-4 overflow-hidden justify-center flex-wrap">[\s\S]*?<!-- Carousel Arrows -->/,
  `<div class="flex items-center gap-4 overflow-hidden justify-center flex-wrap">
      <?php if(!empty($data['transformations'])): ?>
          <?php foreach($data['transformations'] as $transform): ?>
          <img src="<?php echo htmlspecialchars($transform['afterImage']); ?>" class="w-[180px] h-[180px] object-cover rounded-lg shadow-sm" alt="<?php echo htmlspecialchars($transform['category']); ?>"/>
          <?php endforeach; ?>
      <?php endif; ?>
  </div>
  <!-- Carousel Arrows -->`
);

// 4. Academy Section Text
content = content.replace(
  '<h3 class="text-primary text-lg font-bold tracking-widest uppercase mb-1">START YOUR CAREER IN</h3>',
  '<h3 class="text-primary text-lg font-bold tracking-widest uppercase mb-1"><?php echo htmlspecialchars($data["academyInfo"]["subtitle"] ?? ""); ?></h3>'
);
content = content.replace(
  '<h2 class="text-3xl md:text-4xl font-headline font-bold text-[#0a142f] dark:text-white mb-8">BEAUTY INDUSTRY</h2>',
  '<h2 class="text-3xl md:text-4xl font-headline font-bold text-[#0a142f] dark:text-white mb-8"><?php echo htmlspecialchars($data["academyInfo"]["title"] ?? ""); ?></h2>'
);

// 5. Academy Section Features
content = content.replace(
  /<ul class="space-y-4 mb-8 mx-auto lg:mx-0 inline-block text-left">[\s\S]*?<\/ul>/,
  `<ul class="space-y-4 mb-8 mx-auto lg:mx-0 inline-block text-left">
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
</ul>`
);

// 6. Academy Section Images
content = content.replace(
  /<div class="grid grid-cols-2 grid-rows-2 gap-2 h-\[400px\]">[\s\S]*?<\/div>/,
  `<div class="grid grid-cols-2 grid-rows-2 gap-2 h-[400px]">
    <?php if(!empty($data['academyInfo']['images'])): ?>
        <?php if(!empty($data['academyInfo']['images'][0])): ?><img src="<?php echo htmlspecialchars($data['academyInfo']['images'][0]); ?>" class="col-span-2 w-full h-full object-cover rounded-lg shadow-sm" alt="Class"/><?php endif; ?>
        <?php if(!empty($data['academyInfo']['images'][1])): ?><img src="<?php echo htmlspecialchars($data['academyInfo']['images'][1]); ?>" class="w-full h-full object-cover rounded-lg shadow-sm" alt="Practice 1"/><?php endif; ?>
        <?php if(!empty($data['academyInfo']['images'][2])): ?><img src="<?php echo htmlspecialchars($data['academyInfo']['images'][2]); ?>" class="w-full h-full object-cover rounded-lg shadow-sm" alt="Practice 2"/><?php endif; ?>
    <?php endif; ?>
</div>`
);

// 7. Why Choose Us Section
content = content.replace(
  /<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
  `<?php 
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
        </section>`
);

// 8. Instagram Section
content = content.replace(
  /<div class="flex overflow-hidden justify-center mb-8 gap-3 max-w-\[1000px\] mx-auto">[\s\S]*?<\/div>/,
  `<div class="flex overflow-hidden justify-center mb-8 gap-3 max-w-[1000px] mx-auto">
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
</div>`
);

fs.writeFileSync('index.php', content, 'utf8');
console.log('Dynamic index.php rendering applied');
