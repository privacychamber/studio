<?php
/**
 * config.php - Shared configuration
 * 
 * IMPORTANT: Change ADMIN_PASSWORD before going live!
 */

// ⚠️  CHANGE THIS PASSWORD before uploading to server!
define('ADMIN_PASSWORD', 'GlamHouse@Admin2024');

// Max upload size in bytes (50MB default for videos)
define('MAX_UPLOAD_SIZE', 50 * 1024 * 1024);

// Allowed image and video types
define('ALLOWED_TYPES', ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'video/mp4', 'video/webm', 'video/quicktime']);
