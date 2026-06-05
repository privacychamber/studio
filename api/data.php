<?php
/**
 * data.php - Main CMS Database API
 * GET  /api/data.php  -> returns all site data as JSON
 * POST /api/data.php  -> saves updated site data from JSON body
 * 
 * Protected by ADMIN_PASSWORD in config.php
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Path to the JSON database file (one level up from public_html/api/)
// On Namecheap: stored OUTSIDE public_html for security
$db_path = __DIR__ . '/../../data/db.json';
$data_dir = dirname($db_path);

// Default data — mirrors src/lib/db.ts
$default_data = [
    'services' => [
        ['id' => '1', 'title' => 'Keratin Treatment', 'desc' => 'Transform your hair with our premium keratin treatment for smooth, frizz-free results.', 'price' => '₹3,999/-', 'imageUrl' => 'https://picsum.photos/seed/hair1/600/400'],
        ['id' => '2', 'title' => 'Microblading', 'desc' => 'Get perfectly shaped, natural-looking brows that frame your face beautifully.', 'price' => '₹4,999/-', 'imageUrl' => 'https://picsum.photos/seed/brows1/600/400'],
        ['id' => '3', 'title' => 'Lash Extensions', 'desc' => 'Wake up with flawless, voluminous lashes every single day.', 'price' => '₹1,999/-', 'imageUrl' => 'https://picsum.photos/seed/lashes1/600/400'],
        ['id' => '4', 'title' => 'Hair Color', 'desc' => 'Expert color formulation for a stunning, dimensional look that suits you.', 'price' => '₹2,499/-', 'imageUrl' => 'https://picsum.photos/seed/haircolor1/600/400'],
    ],
    'courses' => [
        ['id' => '1', 'title' => 'NAIL COURSE', 'duration' => '15 Days', 'price' => '₹14,999/-', 'imageUrl' => 'https://picsum.photos/seed/nail/400/300'],
        ['id' => '2', 'title' => 'EYELASH COURSE', 'duration' => '7 Days', 'price' => '₹9,999/-', 'imageUrl' => 'https://picsum.photos/seed/lash/400/300'],
    ],
    'testimonials' => [
        ['id' => '1', 'name' => 'Neha Sharma', 'review' => 'The best keratin treatment I\'ve ever had! My hair feels amazing and looks so healthy.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=1'],
        ['id' => '2', 'name' => 'Pooja Verma', 'review' => 'Microblading done perfectly! My brows look so natural. Highly recommended.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=2'],
        ['id' => '3', 'name' => 'Priya Mehta', 'review' => 'Lash extensions are just perfect. The team is so professional and friendly.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=3'],
        ['id' => '4', 'name' => 'Ankita Singh', 'review' => 'Joined the nail course and it changed my career! Best academy in the city.', 'rating' => 5, 'imageUrl' => 'https://i.pravatar.cc/150?u=4'],
    ],
    'transformations' => [
        ['id' => '1', 'category' => 'HAIR', 'beforeImage' => 'https://picsum.photos/seed/hairbefore/400/400', 'afterImage' => 'https://picsum.photos/seed/hairafter/400/400'],
        ['id' => '2', 'category' => 'BROWS', 'beforeImage' => 'https://picsum.photos/seed/browbefore/400/400', 'afterImage' => 'https://picsum.photos/seed/browafter/400/400'],
        ['id' => '3', 'category' => 'LIPS', 'beforeImage' => 'https://picsum.photos/seed/lipbefore/400/400', 'afterImage' => 'https://picsum.photos/seed/lipafter/400/400'],
    ],
];

// Initialize DB if it doesn't exist
if (!file_exists($data_dir)) {
    mkdir($data_dir, 0755, true);
}
if (!file_exists($db_path)) {
    file_put_contents($db_path, json_encode($default_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

// --- GET: Return all data ---
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $content = file_get_contents($db_path);
    if ($content === false) {
        echo json_encode($default_data);
    } else {
        echo $content;
    }
    exit;
}

// --- POST: Save data (admin only) ---
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check admin password via header or query param
    require_once __DIR__ . '/config.php';
    $provided_password = $_SERVER['HTTP_X_ADMIN_PASSWORD'] ?? $_GET['password'] ?? '';
    
    if ($provided_password !== ADMIN_PASSWORD) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Unauthorized']);
        exit;
    }

    $input = file_get_contents('php://input');
    $new_data = json_decode($input, true);

    if ($new_data === null) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
        exit;
    }

    $result = file_put_contents($db_path, json_encode($new_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    
    if ($result !== false) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to write database. Check folder permissions (chmod 755 data/).']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
