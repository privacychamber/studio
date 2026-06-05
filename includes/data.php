<?php
// Define the path to the database (same as api/data.php)
$db_path = __DIR__ . '/../data/db.json';

$data = [
    'services' => [
        ['id' => '1', 'title' => 'Keratin Treatment', 'desc' => 'Transform your hair with our premium keratin treatment for smooth, frizz-free results.', 'price' => '₹3,999/-', 'imageUrl' => '/public/images/IMG_0810.JPG.jpeg'],
        ['id' => '2', 'title' => 'Microblading', 'desc' => 'Get perfectly shaped, natural-looking brows that frame your face beautifully.', 'price' => '₹4,999/-', 'imageUrl' => '/public/images/IMG_3593.PNG'],
        ['id' => '3', 'title' => 'Lash Extensions', 'desc' => 'Wake up with flawless, voluminous lashes every single day.', 'price' => '₹1,999/-', 'imageUrl' => '/public/images/IMG_1404.JPG.jpeg'],
        ['id' => '4', 'title' => 'Hair Color', 'desc' => 'Expert color formulation for a stunning, dimensional look that suits you.', 'price' => '₹2,499/-', 'imageUrl' => '/public/images/IMG_1403.JPG.jpeg'],
    ],
    'courses' => [
        ['id' => '1', 'title' => 'NAIL COURSE', 'duration' => '15 Days', 'price' => '₹14,999/-', 'imageUrl' => '/public/images/IMG_0528.JPG.jpeg'],
        ['id' => '2', 'title' => 'EYELASH COURSE', 'duration' => '7 Days', 'price' => '₹9,999/-', 'imageUrl' => '/public/images/IMG_1405.JPG.jpeg'],
    ],
    'testimonials' => [
        ['id' => '1', 'name' => 'Neha Sharma', 'review' => 'The best keratin treatment I\'ve ever had! My hair feels amazing and looks so healthy.', 'rating' => 5, 'imageUrl' => '/public/logo.png'],
        ['id' => '2', 'name' => 'Pooja Verma', 'review' => 'Microblading done perfectly! My brows look so natural. Highly recommended.', 'rating' => 5, 'imageUrl' => '/public/logo.png'],
        ['id' => '3', 'name' => 'Priya Mehta', 'review' => 'Lash extensions are just perfect. The team is so professional and friendly.', 'rating' => 5, 'imageUrl' => '/public/logo.png'],
        ['id' => '4', 'name' => 'Ankita Singh', 'review' => 'Joined the nail course and it changed my career! Best academy in the city.', 'rating' => 5, 'imageUrl' => '/public/logo.png'],
    ],
    'reels' => [
        ['id' => '1', 'title' => 'Glam Transformation', 'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'],
        ['id' => '2', 'title' => 'Bridal Makeup', 'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'],
        ['id' => '3', 'title' => 'Nail Art Tutorial', 'videoUrl' => 'https://www.w3schools.com/html/mov_bbb.mp4'],
    ]
];

if (file_exists($db_path)) {
    $json = file_get_contents($db_path);
    if ($json !== false) {
        $parsed = json_decode($json, true);
        if ($parsed) {
            $data = $parsed;
        }
    }
}
?>
