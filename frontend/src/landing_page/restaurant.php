<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: http://localhost:3000"); // Your frontend URL
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


// Decode JSON from POST request
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["form" => ["message" => "Invalid JSON received."]]);
    exit;
}

// Check required fields
if (empty($data['restaurantName'])) {
    echo json_encode(["form" => ["message" => "Field restaurantName is required."]]);
    exit;
}

// Proceed with further logic, e.g., saving to the database
echo json_encode(["status" => "success", "message" => "Restaurant registration successful!"]);

// Database connection
$conn = new mysqli("localhost", "root", "", "food-order-website");

// Check connection
if ($conn->connect_error) {
    echo json_encode(["message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Get the POST data
$data = json_decode(file_get_contents("php://input"), true);

// Check if fields are empty
$requiredFields = [
    'restaurantName', 'ownerName', 'pocDesignation', 
    'ownerEmail', 'password', 'address', 'city', 'state', 'zip'
];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        echo json_encode(["form" => ["message" => "Field $field is required."]]);
        exit;
    }
}

// Validate email format
if (!filter_var($data['ownerEmail'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["form" => ["message" => "Invalid email format."]]);
    exit;
}

// Validate ZIP code
if (!preg_match('/^\d{5,6}$/', $data['zip'])) {
    echo json_encode(["form" => ["message" => "Invalid ZIP code format."]]);
    exit;
}

// Prepare and bind
$stmt = $conn->prepare(
    "INSERT INTO restaurant_partners (restaurantName, ownerName, pocDesignation, ownerEmail, password, address, address2, city, state, zip, agreement) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
);

if ($stmt) {
    $stmt->bind_param(
        "sssssssssss",
        $data['restaurantName'],
        $data['ownerName'],
        $data['pocDesignation'],
        $data['ownerEmail'],
        password_hash($data['password'], PASSWORD_BCRYPT),
        $data['address'],
        $data['address2'],
        $data['city'],
        $data['state'],
        $data['zip'],
        $data['agreement'] ? 1 : 0
    );

    if ($stmt->execute()) {
        echo json_encode(["message" => "Restaurant registration successful."]);
    } else {
        echo json_encode(["form" => ["message" => "Error: " . $stmt->error]]);
    }

    $stmt->close();
} else {
    echo json_encode(["form" => ["message" => "Error preparing query: " . $conn->error]]);
}

// Close the database connection
$conn->close();
?>
