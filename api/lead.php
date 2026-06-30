<?php
/**
 * lead.php - Endpoint to capture leads from frontend forms
 * POST /api/lead.php -> appends a new lead to db.json
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $leadData = json_decode($input, true);

    if (!$leadData || empty($leadData['email']) && empty($leadData['phone'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid lead data. Contact info required.']);
        exit;
    }

    $db_path = __DIR__ . '/../data/db.json';
    if (!file_exists($db_path)) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Database not found.']);
        exit;
    }

    $db_content = file_get_contents($db_path);
    $db = json_decode($db_content, true);

    if (!isset($db['leads'])) {
        $db['leads'] = [];
    }

    $lead = [
        'id' => (string)time(),
        'name' => $leadData['name'] ?? '',
        'email' => $leadData['email'] ?? '',
        'phone' => $leadData['phone'] ?? '',
        'message' => $leadData['message'] ?? '',
        'date' => date('c'),
        'source' => $leadData['source'] ?? 'Website Form'
    ];

    array_unshift($db['leads'], $lead); // Add to beginning

    if (file_put_contents($db_path, json_encode($db, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to save lead.']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
