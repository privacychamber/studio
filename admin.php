<?php
/**
 * Glam House Admin Dashboard (Standalone PHP)
 * Access via: https://yourdomain.com/admin-panel/
 * 
 * No Next.js required — works directly on shared hosting.
 */

require_once __DIR__ . '/api/config.php';

// Define a secure auth token
define('AUTH_TOKEN', md5(ADMIN_PASSWORD . 'glam_secret_salt_2024'));

// --- Login / Logout ---
if (isset($_POST['logout'])) {
    setcookie('glam_admin_auth', '', time() - 3600, '/');
    header('Location: admin.php');
    exit;
}

if (isset($_POST['password'])) {
    if ($_POST['password'] === ADMIN_PASSWORD) {
        setcookie('glam_admin_auth', AUTH_TOKEN, time() + (86400 * 30), '/'); // 30 days
        header('Location: admin.php');
        exit;
    } else {
        $login_error = 'Incorrect password. Please try again.';
    }
}

// Redirect to login if not authenticated
$logged_in = isset($_COOKIE['glam_admin_auth']) && $_COOKIE['glam_admin_auth'] === AUTH_TOKEN;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin | The Glam House</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --primary: #e91e63;
      --accent: #c2185b;
      --bg: #fdf8f5;
      --card: #ffffff;
      --text: #1a1a2e;
      --muted: #777;
      --border: #f0e6e6;
      --success: #22c55e;
      --danger: #ef4444;
    }
    body { font-family: 'Poppins', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }

    /* ===== LOGIN PAGE ===== */
    .login-wrap { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%); }
    .login-card { background: white; border-radius: 24px; padding: 48px 40px; width: 100%; max-width: 420px; box-shadow: 0 30px 80px rgba(233,30,99,0.15); text-align: center; }
    .login-logo { font-size: 40px; margin-bottom: 8px; }
    .login-card h1 { font-size: 22px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
    .login-card p { font-size: 13px; color: var(--muted); margin-bottom: 32px; }
    .login-card input[type=password] { width: 100%; padding: 14px 18px; border: 2px solid var(--border); border-radius: 12px; font-size: 15px; font-family: inherit; outline: none; transition: border-color 0.2s; }
    .login-card input[type=password]:focus { border-color: var(--primary); }
    .btn-primary { display: inline-block; width: 100%; padding: 14px; background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; font-family: inherit; cursor: pointer; margin-top: 16px; transition: opacity 0.2s; }
    .btn-primary:hover { opacity: 0.9; }
    .error-msg { background: #fee2e2; color: var(--danger); border-radius: 10px; padding: 12px 16px; font-size: 13px; margin-top: 16px; }

    /* ===== MAIN ADMIN ===== */
    .topbar { background: white; border-bottom: 1px solid var(--border); padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 20px rgba(0,0,0,0.04); }
    .topbar-title { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 18px; color: var(--text); }
    .topbar-title span { background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .btn-sm { padding: 8px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; font-family: inherit; cursor: pointer; border: none; transition: all 0.2s; }
    .btn-save { background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; }
    .btn-save:hover { opacity: 0.9; transform: translateY(-1px); }
    .btn-logout { background: #f1f5f9; color: var(--muted); }
    .btn-logout:hover { background: #e2e8f0; }

    .container { max-width: 1100px; margin: 0 auto; padding: 32px 24px; }
    .tabs { display: flex; gap: 4px; background: white; border: 1px solid var(--border); border-radius: 14px; padding: 6px; margin-bottom: 28px; flex-wrap: wrap; }
    .tab { padding: 10px 20px; border-radius: 10px; border: none; background: transparent; font-family: inherit; font-size: 13px; font-weight: 600; color: var(--muted); cursor: pointer; transition: all 0.2s; }
    .tab.active { background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; }
    .tab:hover:not(.active) { background: var(--bg); color: var(--text); }

    .section { display: none; }
    .section.active { display: block; }

    .card { background: white; border: 1px solid var(--border); border-radius: 16px; margin-bottom: 20px; overflow: hidden; }
    .card-header { padding: 14px 20px; background: var(--bg); display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); }
    .card-header h3 { font-size: 13px; font-weight: 600; color: var(--text); }
    .card-body { padding: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    @media(max-width:640px){ .card-body { grid-template-columns: 1fr; } }

    .form-group { margin-bottom: 14px; }
    .form-group label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 6px; }
    .form-group input, .form-group textarea { width: 100%; padding: 10px 14px; border: 1.5px solid var(--border); border-radius: 10px; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--primary); }
    .form-group textarea { min-height: 80px; resize: vertical; }

    .image-section { border-left: 1px solid var(--border); padding-left: 20px; }
    .image-preview { width: 100%; aspect-ratio: 16/10; border-radius: 12px; overflow: hidden; background: var(--bg); position: relative; margin-bottom: 12px; }
    .image-preview img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .image-row { display: flex; gap: 8px; align-items: center; }
    .image-row input[type=text] { flex: 1; padding: 9px 12px; border: 1.5px solid var(--border); border-radius: 8px; font-size: 12px; font-family: inherit; outline: none; }
    .image-row input[type=text]:focus { border-color: var(--primary); }
    .btn-upload { padding: 9px 14px; background: var(--bg); border: 1.5px solid var(--border); border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; white-space: nowrap; transition: all 0.2s; color: var(--text); }
    .btn-upload:hover { border-color: var(--primary); color: var(--primary); }

    .btn-add { width: 100%; padding: 14px; background: white; border: 2px dashed var(--border); border-radius: 12px; font-family: inherit; font-size: 13px; font-weight: 600; color: var(--muted); cursor: pointer; transition: all 0.2s; }
    .btn-add:hover { border-color: var(--primary); color: var(--primary); }
    .btn-delete { padding: 6px 12px; background: #fee2e2; border: none; border-radius: 8px; color: var(--danger); font-size: 12px; font-weight: 600; cursor: pointer; transition: background 0.2s; font-family: inherit; }
    .btn-delete:hover { background: var(--danger); color: white; }

    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .transformation-images { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .transformation-img-box { text-align: center; }
    .transformation-img-box label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); display: block; margin-bottom: 8px; }
    .transformation-img-box .image-preview { aspect-ratio: 1; }

    .toast { position: fixed; bottom: 32px; right: 32px; background: var(--text); color: white; padding: 14px 24px; border-radius: 12px; font-size: 14px; font-weight: 600; z-index: 9999; transform: translateY(100px); opacity: 0; transition: all 0.3s; }
    .toast.show { transform: translateY(0); opacity: 1; }
    .toast.success { background: var(--success); }
    .toast.error { background: var(--danger); }

    .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; vertical-align: middle; margin-right: 6px; }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>

<?php if (!$logged_in): ?>
<!-- ==================== LOGIN ==================== -->
<div class="login-wrap">
  <div class="login-card">
    <div class="login-logo">💅</div>
    <h1>The Glam House</h1>
    <p>Admin Dashboard — Enter password to continue</p>
    <form method="POST">
      <input type="password" name="password" placeholder="Enter admin password" autofocus required />
      <button type="submit" class="btn-primary">Sign In</button>
      <?php if (isset($login_error)): ?>
        <div class="error-msg"><?= htmlspecialchars($login_error) ?></div>
      <?php endif; ?>
    </form>
  </div>
</div>

<?php else: ?>
<!-- ==================== DASHBOARD ==================== -->
<div class="topbar">
  <div class="topbar-title">💅 <span>The Glam House</span> — Admin</div>
  <div style="display:flex;gap:10px;align-items:center;">
    <button class="btn-sm btn-save" id="saveBtn" onclick="saveAll()">Save Changes</button>
    <form method="POST" style="display:inline;">
      <button type="submit" name="logout" class="btn-sm btn-logout">Logout</button>
    </form>
  </div>
</div>

<div class="container">
  <div class="tabs">
    <button class="tab active" onclick="switchTab('services', this)">Services</button>
    <button class="tab" onclick="switchTab('courses', this)">Courses</button>
    <button class="tab" onclick="switchTab('testimonials', this)">Testimonials</button>
    <button class="tab" onclick="switchTab('transformations', this)">Transformations</button>
    <button class="tab" onclick="switchTab('reels', this)">Reels</button>
  </div>

  <!-- SERVICES -->
  <div id="tab-services" class="section active"></div>
  <!-- COURSES -->
  <div id="tab-courses" class="section"></div>
  <!-- TESTIMONIALS -->
  <div id="tab-testimonials" class="section"></div>
  <!-- TRANSFORMATIONS -->
  <div id="tab-transformations" class="section"></div>
  <!-- REELS -->
  <div id="tab-reels" class="section"></div>
</div>

<div class="toast" id="toast"></div>

<script>
const ADMIN_PASSWORD = <?= json_encode(ADMIN_PASSWORD) ?>;
const API_BASE = './api';
let db = null;

// ===== FETCH DATA =====
async function loadData() {
  try {
    const res = await fetch(`${API_BASE}/data.php`);
    db = await res.json();
    renderAll();
  } catch(e) {
    showToast('Failed to load data. Check server connection.', 'error');
  }
}

// ===== RENDER =====
function renderAll() {
  renderServices();
  renderCourses();
  renderTestimonials();
  renderTransformations();
  if (db.reels) renderReels();
}

function renderServices() {
  const el = document.getElementById('tab-services');
  el.innerHTML = db.services.map((s, i) => `
    <div class="card">
      <div class="card-header">
        <h3>Service #${i+1}</h3>
        <button class="btn-delete" onclick="removeItem('services', ${i})">🗑 Delete</button>
      </div>
      <div class="card-body">
        <div>
          <div class="form-group"><label>Title</label><input type="text" value="${esc(s.title)}" oninput="db.services[${i}].title=this.value" /></div>
          <div class="form-group"><label>Price</label><input type="text" value="${esc(s.price)}" oninput="db.services[${i}].price=this.value" /></div>
          <div class="form-group"><label>Description</label><textarea oninput="db.services[${i}].desc=this.value">${esc(s.desc)}</textarea></div>
        </div>
        <div class="image-section">
          <div class="form-group"><label>Service Image</label></div>
          <div class="image-preview"><img src="${esc(s.imageUrl)}" id="svc-img-${i}" onerror="this.src='https://picsum.photos/seed/${i}/400/300'" /></div>
          <div class="image-row">
            <input type="text" value="${esc(s.imageUrl)}" oninput="db.services[${i}].imageUrl=this.value; document.getElementById('svc-img-${i}').src=this.value" />
            <button class="btn-upload" onclick="uploadImage(this, 'services', ${i}, 'imageUrl', 'svc-img-${i}')">📁 Upload</button>
          </div>
        </div>
      </div>
    </div>
  `).join('') + `<button class="btn-add" onclick="addService()">+ Add Service</button>`;
}

function renderCourses() {
  const el = document.getElementById('tab-courses');
  el.innerHTML = db.courses.map((c, i) => `
    <div class="card">
      <div class="card-header">
        <h3>Course #${i+1}</h3>
        <button class="btn-delete" onclick="removeItem('courses', ${i})">🗑 Delete</button>
      </div>
      <div class="card-body">
        <div>
          <div class="form-group"><label>Title</label><input type="text" value="${esc(c.title)}" oninput="db.courses[${i}].title=this.value" /></div>
          <div class="form-group"><label>Duration</label><input type="text" value="${esc(c.duration)}" oninput="db.courses[${i}].duration=this.value" /></div>
          <div class="form-group"><label>Price</label><input type="text" value="${esc(c.price)}" oninput="db.courses[${i}].price=this.value" /></div>
        </div>
        <div class="image-section">
          <div class="form-group"><label>Course Image</label></div>
          <div class="image-preview"><img src="${esc(c.imageUrl)}" id="crs-img-${i}" onerror="this.src='https://picsum.photos/seed/crs${i}/400/300'" /></div>
          <div class="image-row">
            <input type="text" value="${esc(c.imageUrl)}" oninput="db.courses[${i}].imageUrl=this.value; document.getElementById('crs-img-${i}').src=this.value" />
            <button class="btn-upload" onclick="uploadImage(this, 'courses', ${i}, 'imageUrl', 'crs-img-${i}')">📁 Upload</button>
          </div>
        </div>
      </div>
    </div>
  `).join('') + `<button class="btn-add" onclick="addCourse()">+ Add Course</button>`;
}

function renderTestimonials() {
  const el = document.getElementById('tab-testimonials');
  el.innerHTML = db.testimonials.map((t, i) => `
    <div class="card">
      <div class="card-header">
        <h3>${esc(t.name)}</h3>
        <button class="btn-delete" onclick="removeItem('testimonials', ${i})">🗑 Delete</button>
      </div>
      <div class="card-body">
        <div>
          <div class="form-group"><label>Client Name</label><input type="text" value="${esc(t.name)}" oninput="db.testimonials[${i}].name=this.value" /></div>
          <div class="form-group"><label>Review</label><textarea oninput="db.testimonials[${i}].review=this.value">${esc(t.review)}</textarea></div>
        </div>
        <div class="image-section">
          <div class="form-group"><label>Avatar Photo</label></div>
          <div class="image-preview" style="aspect-ratio:1;border-radius:50%;width:100px;margin:0 auto 12px;"><img src="${esc(t.imageUrl)}" id="tst-img-${i}" style="width:100%;height:100%;object-fit:cover;" /></div>
          <div class="image-row">
            <input type="text" value="${esc(t.imageUrl)}" oninput="db.testimonials[${i}].imageUrl=this.value; document.getElementById('tst-img-${i}').src=this.value" />
            <button class="btn-upload" onclick="uploadImage(this, 'testimonials', ${i}, 'imageUrl', 'tst-img-${i}')">📁 Upload</button>
          </div>
        </div>
      </div>
    </div>
  `).join('') + `<button class="btn-add" onclick="addTestimonial()">+ Add Testimonial</button>`;
}

function renderTransformations() {
  const el = document.getElementById('tab-transformations');
  el.innerHTML = db.transformations.map((t, i) => `
    <div class="card">
      <div class="card-header">
        <input type="text" value="${esc(t.category)}" placeholder="Category (e.g. HAIR)" oninput="db.transformations[${i}].category=this.value"
          style="border:none;background:transparent;font-weight:700;font-size:13px;font-family:inherit;outline:none;width:200px;" />
        <button class="btn-delete" onclick="removeItem('transformations', ${i})">🗑 Delete</button>
      </div>
      <div class="card-body">
        <div class="transformation-img-box">
          <label>Before Image</label>
          <div class="image-preview"><img src="${esc(t.beforeImage)}" id="tr-b-${i}" onerror="this.src='https://picsum.photos/seed/bef${i}/400/400'" /></div>
          <button class="btn-upload" style="width:100%;margin-top:8px;" onclick="uploadImage(this, 'transformations', ${i}, 'beforeImage', 'tr-b-${i}')">📁 Upload Before</button>
        </div>
        <div class="transformation-img-box">
          <label>After Image</label>
          <div class="image-preview"><img src="${esc(t.afterImage)}" id="tr-a-${i}" onerror="this.src='https://picsum.photos/seed/aft${i}/400/400'" /></div>
          <button class="btn-upload" style="width:100%;margin-top:8px;" onclick="uploadImage(this, 'transformations', ${i}, 'afterImage', 'tr-a-${i}')">📁 Upload After</button>
        </div>
      </div>
    </div>
  `).join('') + `<button class="btn-add" onclick="addTransformation()">+ Add Transformation</button>`;
}

function renderReels() {
  const el = document.getElementById('tab-reels');
  el.innerHTML = (db.reels || []).map((r, i) => `
    <div class="card">
      <div class="card-header">
        <h3>Reel #${i+1}</h3>
        <button class="btn-delete" onclick="removeItem('reels', ${i})">🗑 Delete</button>
      </div>
      <div class="card-body">
        <div>
          <div class="form-group"><label>Title</label><input type="text" value="${esc(r.title)}" oninput="db.reels[${i}].title=this.value" /></div>
          <div class="form-group"><label>Video URL</label><input type="text" value="${esc(r.videoUrl)}" oninput="db.reels[${i}].videoUrl=this.value; document.getElementById('reel-vid-${i}').src=this.value" /></div>
          <p style="font-size:11px;color:var(--muted);margin-top:10px;">Upload MP4, WEBM, or MOV. Max size 50MB.</p>
        </div>
        <div class="image-section">
          <div class="form-group"><label>Video Preview</label></div>
          <div class="image-preview" style="aspect-ratio:9/16; max-width:200px; margin:0 auto 12px; background:#000;">
            <video id="reel-vid-${i}" src="${esc(r.videoUrl)}" style="width:100%;height:100%;object-fit:cover;" controls muted></video>
          </div>
          <div class="image-row">
            <button class="btn-upload" style="width:100%;" onclick="uploadVideo(this, 'reels', ${i}, 'videoUrl', 'reel-vid-${i}')">🎬 Upload Video</button>
          </div>
        </div>
      </div>
    </div>
  `).join('') + `<button class="btn-add" onclick="addReel()">+ Add Reel</button>`;
}

// ===== CRUD =====
function removeItem(section, index) {
  if (!confirm('Delete this item?')) return;
  db[section].splice(index, 1);
  renderAll();
}

function addService() {
  db.services.push({ id: Date.now().toString(), title: 'New Service', desc: 'Description here', price: '₹0/-', imageUrl: 'https://picsum.photos/seed/new/600/400' });
  renderAll(); switchTab('services', document.querySelector('.tab'));
}
function addCourse() {
  db.courses.push({ id: Date.now().toString(), title: 'NEW COURSE', duration: '10 Days', price: '₹0/-', imageUrl: 'https://picsum.photos/seed/newc/400/300' });
  renderAll(); switchTab('courses', document.querySelectorAll('.tab')[1]);
}
function addTestimonial() {
  db.testimonials.push({ id: Date.now().toString(), name: 'Client Name', review: 'Amazing experience!', rating: 5, imageUrl: 'https://i.pravatar.cc/150' });
  renderAll(); switchTab('testimonials', document.querySelectorAll('.tab')[2]);
}
function addTransformation() {
  db.transformations.push({ id: Date.now().toString(), category: 'NEW', beforeImage: 'https://picsum.photos/seed/b/400/400', afterImage: 'https://picsum.photos/seed/a/400/400' });
  renderAll(); switchTab('transformations', document.querySelectorAll('.tab')[3]);
}
function addReel() {
  if(!db.reels) db.reels = [];
  db.reels.push({ id: Date.now().toString(), title: 'New Reel', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' });
  renderAll(); switchTab('reels', document.querySelectorAll('.tab')[4]);
}

// ===== UPLOAD LOGIC =====
async function uploadVideo(btn, section, index, field, vidId) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'video/*';
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 50 * 1024 * 1024) {
      showToast('File too large. Max 50MB.', 'error');
      return;
    }
    const origText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Uploading...';
    btn.disabled = true;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('password', ADMIN_PASSWORD);

    try {
      const res = await fetch(`${API_BASE}/upload.php`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) {
        db[section][index][field] = data.url;
        const vid = document.getElementById(vidId);
        if (vid) vid.src = data.url;
        showToast('Video uploaded!', 'success');
      } else {
        showToast(data.error || 'Upload failed', 'error');
      }
    } catch(e) {
      showToast('Upload failed. Check connection.', 'error');
    }

    btn.innerHTML = origText;
    btn.disabled = false;
  };
  input.click();
}

// ===== IMAGE UPLOAD =====
async function uploadImage(btn, section, index, field, imgId) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async () => {
    const file = input.files[0];
    if (!file) return;
    const origText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Uploading...';
    btn.disabled = true;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('password', ADMIN_PASSWORD);

    try {
      const res = await fetch(`${API_BASE}/upload.php`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) {
        db[section][index][field] = data.url;
        const img = document.getElementById(imgId);
        if (img) img.src = data.url;
        showToast('Image uploaded!', 'success');
      } else {
        showToast(data.error || 'Upload failed', 'error');
      }
    } catch(e) {
      showToast('Upload failed. Check connection.', 'error');
    }

    btn.innerHTML = origText;
    btn.disabled = false;
  };
  input.click();
}

// ===== SAVE ALL =====
async function saveAll() {
  const btn = document.getElementById('saveBtn');
  btn.innerHTML = '<span class="spinner"></span> Saving...';
  btn.disabled = true;

  try {
    const res = await fetch(`${API_BASE}/data.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': ADMIN_PASSWORD },
      body: JSON.stringify(db)
    });
    const result = await res.json();
    if (result.success) {
      showToast('✅ Changes saved successfully!', 'success');
    } else {
      showToast(result.error || 'Save failed', 'error');
    }
  } catch(e) {
    showToast('Save failed. Check connection.', 'error');
  }

  btn.innerHTML = 'Save Changes';
  btn.disabled = false;
}

// ===== TABS =====
function switchTab(name, clickedBtn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (clickedBtn) clickedBtn.classList.add('active');
}

// ===== TOAST =====
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type + ' show';
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ===== HELPERS =====
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Init
loadData();
</script>

<?php endif; ?>
</body>
</html>
