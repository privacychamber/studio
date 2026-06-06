const fs = require('fs');
let content = fs.readFileSync('index.php', 'utf8');

const replacements = [
    { regex: /bg-white/g, replacement: 'bg-white dark:bg-background' },
    { regex: /text-\[\#0a142f\]/g, replacement: 'text-[#0a142f] dark:text-white' },
    { regex: /text-\[\#4b5563\]/g, replacement: 'text-[#4b5563] dark:text-gray-300' },
    { regex: /text-gray-600/g, replacement: 'text-gray-600 dark:text-gray-300' },
    { regex: /text-gray-500/g, replacement: 'text-gray-500 dark:text-gray-400' },
    { regex: /bg-\[\#fff9fa\]/g, replacement: 'bg-[#fff9fa] dark:bg-card' },
    { regex: /bg-\[\#fff5f7\]/g, replacement: 'bg-[#fff5f7] dark:bg-card' },
    { regex: /bg-\[\#fafafa\]/g, replacement: 'bg-[#fafafa] dark:bg-secondary' },
    { regex: /bg-\[\#fffdfc\]/g, replacement: 'bg-[#fffdfc] dark:bg-card' },
    { regex: /border-gray-200/g, replacement: 'border-gray-200 dark:border-border' },
    { regex: /border-gray-100/g, replacement: 'border-gray-100 dark:border-border' },
    { regex: /border-pink-100/g, replacement: 'border-pink-100 dark:border-border' },
    { regex: /bg-gray-50/g, replacement: 'bg-gray-50 dark:bg-secondary' },
    // Fix any duplicates like dark:bg-background dark:bg-background
    { regex: /(dark:bg-background )+/g, replacement: 'dark:bg-background ' },
    { regex: /(dark:text-white )+/g, replacement: 'dark:text-white ' },
    { regex: /(dark:text-gray-300 )+/g, replacement: 'dark:text-gray-300 ' },
    { regex: /(dark:text-gray-400 )+/g, replacement: 'dark:text-gray-400 ' },
    { regex: /(dark:bg-card )+/g, replacement: 'dark:bg-card ' },
    { regex: /(dark:bg-secondary )+/g, replacement: 'dark:bg-secondary ' },
    { regex: /(dark:border-border )+/g, replacement: 'dark:border-border ' },
];

for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
}

// Special case for cards floating on right in hero section, to avoid them blending
content = content.replace(/border border-pink-100 dark:border-border bg-white dark:bg-background/g, 'border border-pink-100 dark:border-border bg-white dark:bg-card');

fs.writeFileSync('index.php', content, 'utf8');
console.log('Dark mode classes applied to index.php');
