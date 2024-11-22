<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "food-order-website";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['email']) || !isset($data['password'])) {
    echo json_encode(["message" => "Invalid request data"]);
    exit;
}

$email = $data['email'];
$password = $data['password'];

$sql = "SELECT password FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo json_encode(["message" => "Sign in successful"]);
    } else {
        echo json_encode(["message" => "Invalid email or password"]);
    }
} else {
    echo json_encode(["message" => "Invalid email or password"]);
}

$stmt->close();
$conn->close();
?>
