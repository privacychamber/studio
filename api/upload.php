<?php
/**
 * upload.php - Image Upload Handler
 * POST /api/upload.php  -> Accepts multipart/form-data with 'file' field
 * Returns JSON: { success: true, url: "/uploads/filename.jpg" }
 * 
 * Requires X-Admin-Password header for security
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Admin-Password');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/config.php';

// Auth check
$provided_password = $_SERVER['HTTP_X_ADMIN_PASSWORD'] ?? $_POST['password'] ?? '';
if ($provided_password !== ADMIN_PASSWORD) {
    http_response_code(403);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded or upload error: ' . ($_FILES['file']['error'] ?? 'missing')]);
    exit;
}

$file = $_FILES['file'];

// Validate size
if ($file['size'] > MAX_UPLOAD_SIZE) {
    http_response_code(400);
    echo json_encode(['error' => 'File too large. Max 5MB.']);
    exit;
}

// Validate MIME type
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($mime, ALLOWED_TYPES)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type. Allowed: JPG, PNG, WebP, GIF, MP4, WEBM, MOV']);
    exit;
}

// Create uploads directory (inside public_html)
$uploads_dir = __DIR__ . '/../uploads';
if (!file_exists($uploads_dir)) {
    mkdir($uploads_dir, 0755, true);
}

// Generate safe unique filename
$ext = match($mime) {
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
    'image/webp' => 'webp',
    'image/gif'  => 'gif',
    'video/mp4'  => 'mp4',
    'video/webm' => 'webm',
    'video/quicktime' => 'mov',
    default      => 'bin'
};

$unique_name = time() . '_' . bin2hex(random_bytes(8)) . '.' . $ext;
$dest = $uploads_dir . '/' . $unique_name;

if (move_uploaded_file($file['tmp_name'], $dest)) {
    echo json_encode([
        'success' => true,
        'url' => '/uploads/' . $unique_name,
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save file. Check uploads/ folder permissions (chmod 755).']);
}
