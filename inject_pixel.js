const fs = require('fs');
const path = require('path');

const pixelCode = `
    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2042520373296353');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=2042520373296353&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Meta Pixel Code -->
</head>`;

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('.git') && !file.includes('.github') && !file.includes('_next')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.php')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('d:/PROJ/studio');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes("fbq('init', '2042520373296353');") && content.includes('</head>')) {
        content = content.replace('</head>', pixelCode);
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
