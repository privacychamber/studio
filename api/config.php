<?php
/**
 * config.php - Shared configuration
 * 
 * IMPORTANT: Change ADMIN_PASSWORD before going live!
 */

// ⚠️  CHANGE THIS PASSWORD before uploading to server!
define('ADMIN_PASSWORD', 'GlamHouse@Admin2024');

// Max upload size in bytes (5MB default)
define('MAX_UPLOAD_SIZE', 5 * 1024 * 1024);

// Allowed image types
define('ALLOWED_TYPES', ['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
