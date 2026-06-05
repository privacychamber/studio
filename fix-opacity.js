const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const htmlFiles = [
  'about.html',
  'academy.html',
  'admin.html',
  'book.html',
  'contact.html',
  'enroll.html',
  'gallery.html',
  'reviews.html',
  'services.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  if (!fs.existsSync(filePath)) return;

  let html = fs.readFileSync(filePath, 'utf8');

  // Strip Framer Motion inline styles that hide elements
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  
  fs.writeFileSync(filePath, html);
  console.log(`Fixed opacity in ${file}`);
});
