<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$conn = new mysqli("localhost", "root", "", "food-order-website");

// Check connection
if ($conn->connect_error) {
    echo json_encode(["message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Get the POST data
$data = json_decode(file_get_contents("php://input"), true);

// Check if fields are empty
if (empty($data['name']) || empty($data['email']) || empty($data['password']) || empty($data['address']) || empty($data['phone'])) {
    echo json_encode(["message" => "All fields are required."]);
    exit;
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (name, email, password, address, phone) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $data['name'], $data['email'], password_hash($data['password'], PASSWORD_DEFAULT), $data['address'], $data['phone']);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(["message" => "Registration successful."]);
} else {
    echo json_encode(["message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
