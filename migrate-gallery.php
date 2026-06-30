<?php
$dbFile = __DIR__ . '/data/db.json';
if (!file_exists($dbFile)) {
    die("db.json not found");
}

$json = file_get_contents($dbFile);
$data = json_decode($json, true);

if (!isset($data['gallery'])) {
    $data['gallery'] = [];
}

if (count($data['gallery']) > 0) {
    echo "Gallery already populated with " . count($data['gallery']) . " items.\n";
    exit;
}

$imagesDir = __DIR__ . '/images';
if (!is_dir($imagesDir)) {
    die("images directory not found");
}

$files = scandir($imagesDir);
$count = 0;
foreach ($files as $file) {
    if ($file === '.' || $file === '..') continue;
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp'])) {
        $data['gallery'][] = [
            'id' => time() . '_' . $count,
            'title' => 'Gallery Image',
            'category' => 'Uncategorized',
            'imageUrl' => '/images/' . $file
        ];
        $count++;
    }
}

file_put_contents($dbFile, json_encode($data, JSON_PRETTY_PRINT));
echo "Successfully migrated $count images into db.json gallery!\n";
