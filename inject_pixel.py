import os

pixel_code = """
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
"""

directory = "d:\\PROJ\\studio"

for root, dirs, files in os.walk(directory):
    if '.git' in root or '.github' in root or '_next' in root:
        continue
        
    for file in files:
        if file.endswith(".html") or file.endswith(".php"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Check if pixel is already there
            if "fbq('init', '2042520373296353');" in content:
                continue
                
            if "</head>" in content:
                # Insert right before </head>
                new_content = content.replace("</head>", pixel_code + "</head>")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
