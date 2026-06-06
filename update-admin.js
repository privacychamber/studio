const fs = require('fs');
let admin = fs.readFileSync('admin.php', 'utf8');

// 1. Add new tabs
admin = admin.replace(
  '<button class="tab" onclick="switchTab(\'reels\', this)">Reels</button>',
  `<button class="tab" onclick="switchTab('reels', this)">Reels</button>
    <button class="tab" onclick="switchTab('hero', this)">Hero</button>
    <button class="tab" onclick="switchTab('academy', this)">Academy</button>
    <button class="tab" onclick="switchTab('why', this)">Why Us</button>
    <button class="tab" onclick="switchTab('instagram', this)">Instagram</button>`
);

// 2. Add new section divs
admin = admin.replace(
  '<!-- REELS -->\r\n  <div id="tab-reels" class="section"></div>',
  `<!-- REELS -->\r\n  <div id="tab-reels" class="section"></div>\r\n  <!-- HERO -->\r\n  <div id="tab-hero" class="section"></div>\r\n  <!-- ACADEMY -->\r\n  <div id="tab-academy" class="section"></div>\r\n  <!-- WHY CHOOSE US -->\r\n  <div id="tab-why" class="section"></div>\r\n  <!-- INSTAGRAM -->\r\n  <div id="tab-instagram" class="section"></div>`
);
admin = admin.replace(
  '<!-- REELS -->\n  <div id="tab-reels" class="section"></div>',
  `<!-- REELS -->\n  <div id="tab-reels" class="section"></div>\n  <!-- HERO -->\n  <div id="tab-hero" class="section"></div>\n  <!-- ACADEMY -->\n  <div id="tab-academy" class="section"></div>\n  <!-- WHY CHOOSE US -->\n  <div id="tab-why" class="section"></div>\n  <!-- INSTAGRAM -->\n  <div id="tab-instagram" class="section"></div>`
);

// 3. Update renderAll
admin = admin.replace(
  'renderReels();\n}',
  `renderReels();\n  renderHero();\n  renderAcademy();\n  renderWhy();\n  renderInstagram();\n}`
);
admin = admin.replace(
  'renderReels();\r\n}',
  `renderReels();\r\n  renderHero();\r\n  renderAcademy();\r\n  renderWhy();\r\n  renderInstagram();\r\n}`
);

// 4. Add render functions
const renderFuncs = `
function renderHero() {
  const el = document.getElementById('tab-hero');
  if(!db.hero) return;
  el.innerHTML = \`
    <div class="card">
      <div class="card-header"><h3>Hero Settings</h3></div>
      <div class="card-body">
        <div>
          <div class="form-group"><label>Tagline</label><input type="text" value="\${esc(db.hero.tagline)}" oninput="db.hero.tagline=this.value" /></div>
          <div class="form-group"><label>Headline Part 1</label><input type="text" value="\${esc(db.hero.headlinePart1)}" oninput="db.hero.headlinePart1=this.value" /></div>
          <div class="form-group"><label>Headline Highlight (Pink)</label><input type="text" value="\${esc(db.hero.headlineHighlight)}" oninput="db.hero.headlineHighlight=this.value" /></div>
          <div class="form-group"><label>Headline Part 2</label><input type="text" value="\${esc(db.hero.headlinePart2)}" oninput="db.hero.headlinePart2=this.value" /></div>
          <div class="form-group"><label>Subtext</label><textarea oninput="db.hero.subtext=this.value">\${esc(db.hero.subtext)}</textarea></div>
        </div>
        <div class="image-section">
          <div class="form-group"><label>Main Hero Image</label></div>
          <div class="image-preview" style="aspect-ratio:3/4;max-width:200px;margin:0 auto 12px;"><img src="\${esc(db.hero.mainImage)}" id="hero-img" /></div>
          <div class="image-row">
            <input type="text" value="\${esc(db.hero.mainImage)}" oninput="db.hero.mainImage=this.value; document.getElementById('hero-img').src=this.value" />
            <button class="btn-upload" onclick="uploadImageObj(this, db.hero, 'mainImage', 'hero-img')">📁 Upload</button>
          </div>
        </div>
      </div>
    </div>
  \`;
}

function renderAcademy() {
  const el = document.getElementById('tab-academy');
  if(!db.academyInfo) return;
  
  let featuresHtml = db.academyInfo.features.map((f, i) => \`
    <div class="image-row" style="margin-bottom:8px;">
      <input type="text" value="\${esc(f)}" oninput="db.academyInfo.features[\${i}]=this.value" />
      <button class="btn-delete" onclick="db.academyInfo.features.splice(\${i},1);renderAcademy()">X</button>
    </div>
  \`).join('');
  featuresHtml += \`<button class="btn-add" style="padding:8px;margin-top:8px;" onclick="db.academyInfo.features.push('New Feature');renderAcademy()">+ Add Feature</button>\`;

  let imagesHtml = db.academyInfo.images.map((img, i) => \`
    <div style="border:1px solid var(--border);padding:10px;border-radius:8px;margin-bottom:10px;">
      <div class="image-preview" style="aspect-ratio:1;max-width:100px;margin:0 auto 8px;"><img src="\${esc(img)}" id="acad-img-\${i}" /></div>
      <div class="image-row">
        <input type="text" value="\${esc(img)}" oninput="db.academyInfo.images[\${i}]=this.value; document.getElementById('acad-img-\${i}').src=this.value" />
        <button class="btn-upload" onclick="uploadImageArray(this, db.academyInfo.images, \${i}, 'acad-img-\${i}')">📁 Upload</button>
      </div>
    </div>
  \`).join('');

  el.innerHTML = \`
    <div class="card">
      <div class="card-header"><h3>Academy Section Settings</h3></div>
      <div class="card-body">
        <div>
          <div class="form-group"><label>Subtitle</label><input type="text" value="\${esc(db.academyInfo.subtitle)}" oninput="db.academyInfo.subtitle=this.value" /></div>
          <div class="form-group"><label>Main Title</label><input type="text" value="\${esc(db.academyInfo.title)}" oninput="db.academyInfo.title=this.value" /></div>
          <div class="form-group"><label>Features List</label>
            \${featuresHtml}
          </div>
        </div>
        <div class="image-section">
          <div class="form-group"><label>Collage Images (3 recommended)</label></div>
          \${imagesHtml}
        </div>
      </div>
    </div>
  \`;
}

function renderWhy() {
  const el = document.getElementById('tab-why');
  if(!db.whyChooseUs) return;
  el.innerHTML = db.whyChooseUs.map((w, i) => \`
    <div class="card" style="margin-bottom:10px;">
      <div class="card-header">
        <h3>Reason #\${i+1}</h3>
        <button class="btn-delete" onclick="db.whyChooseUs.splice(\${i},1);renderWhy()">🗑 Delete</button>
      </div>
      <div class="card-body" style="grid-template-columns:1fr;">
        <div class="form-group"><label>Title</label><input type="text" value="\${esc(w.title)}" oninput="db.whyChooseUs[\${i}].title=this.value" /></div>
        <div class="form-group"><label>Description</label><textarea style="min-height:50px" oninput="db.whyChooseUs[\${i}].desc=this.value">\${esc(w.desc)}</textarea></div>
      </div>
    </div>
  \`).join('') + \`<button class="btn-add" onclick="db.whyChooseUs.push({title:'NEW REASON',desc:''});renderWhy()">+ Add Reason</button>\`;
}

function renderInstagram() {
  const el = document.getElementById('tab-instagram');
  if(!db.instagramImages) return;
  let html = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:15px;">';
  html += db.instagramImages.map((img, i) => \`
    <div class="card" style="margin-bottom:0;">
      <div class="card-body" style="grid-template-columns:1fr;padding:15px;text-align:center;">
        <div class="image-preview" style="aspect-ratio:1;max-width:150px;margin:0 auto 10px;"><img src="\${esc(img)}" id="ig-img-\${i}" /></div>
        <input type="text" value="\${esc(img)}" oninput="db.instagramImages[\${i}]=this.value; document.getElementById('ig-img-\${i}').src=this.value" style="width:100%;font-size:11px;padding:6px;margin-bottom:8px;border:1px solid #ddd;border-radius:4px;" />
        <div style="display:flex;gap:5px;justify-content:center;">
          <button class="btn-upload" onclick="uploadImageArray(this, db.instagramImages, \${i}, 'ig-img-\${i}')">📁</button>
          <button class="btn-delete" onclick="db.instagramImages.splice(\${i},1);renderInstagram()">🗑</button>
        </div>
      </div>
    </div>
  \`).join('');
  html += '</div>';
  html += \`<button class="btn-add" style="margin-top:20px;" onclick="db.instagramImages.push('https://picsum.photos/seed/ig/400/400');renderInstagram()">+ Add Image</button>\`;
  el.innerHTML = html;
}

// Helper for single object field upload
async function uploadImageObj(btn, obj, field, imgId) {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = async () => {
    const file = input.files[0]; if (!file) return;
    const origText = btn.innerHTML; btn.innerHTML = '<span class="spinner"></span>...'; btn.disabled = true;
    const formData = new FormData(); formData.append('file', file); formData.append('password', ADMIN_PASSWORD);
    try {
      const res = await fetch(\`\${API_BASE}/upload.php\`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) { obj[field] = data.url; const img = document.getElementById(imgId); if(img) img.src = data.url; showToast('Uploaded!', 'success'); }
      else showToast(data.error || 'Failed', 'error');
    } catch(e) { showToast('Upload failed', 'error'); }
    btn.innerHTML = origText; btn.disabled = false;
  };
  input.click();
}

// Helper for array element upload
async function uploadImageArray(btn, arr, index, imgId) {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = async () => {
    const file = input.files[0]; if (!file) return;
    const origText = btn.innerHTML; btn.innerHTML = '...'; btn.disabled = true;
    const formData = new FormData(); formData.append('file', file); formData.append('password', ADMIN_PASSWORD);
    try {
      const res = await fetch(\`\${API_BASE}/upload.php\`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) { arr[index] = data.url; const img = document.getElementById(imgId); if(img) img.src = data.url; showToast('Uploaded!', 'success'); }
      else showToast(data.error || 'Failed', 'error');
    } catch(e) { showToast('Upload failed', 'error'); }
    btn.innerHTML = origText; btn.disabled = false;
  };
  input.click();
}
`;

admin = admin.replace(
  '// ===== CRUD =====',
  renderFuncs + '\n\n// ===== CRUD ====='
);

fs.writeFileSync('admin.php', admin, 'utf8');
console.log('Updated admin.php with new CMS capabilities');
