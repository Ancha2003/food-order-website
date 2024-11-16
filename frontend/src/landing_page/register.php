<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: http://localhost:3000"); // Your frontend URL
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

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
    echo json_encode(["form" => ["message" => "All fields are required."]]);
    exit;
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO users (name, email, password, address, phone) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $data['name'], $data['email'], password_hash($data['password'], PASSWORD_DEFAULT), $data['address'], $data['phone']);

if ($stmt->execute()) {
    // SMS Code Start Here
    $baseUrl = "https://pe256l.api.infobip.com"; // Replace with correct region
    $apiKey = "15dff41e530408e13b98c5d510c796ff-635fbea4-df97-45a4-b83f-2e42c7001885"; // Your API Key
    $smsEndpoint = $baseUrl . "/sms/2/text/advanced";

    $smsMessage = [
        "messages" => [
            [
                "from" => "FoodOrder", // Sender ID
                "destinations" => [
                    ["to" => "+".ltrim($data['phone'], '0')] // Ensure E.164 format
                ],
                "text" => "Hello " . $data['name'] . ", welcome to Food Order Website! Your registration is successful."
            ]
        ]
    ];

    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => $smsEndpoint,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($smsMessage),
        CURLOPT_HTTPHEADER => [
            "Authorization: App $apiKey",
            "Content-Type: application/json",
        ],
    ]);

    $response = curl_exec($curl);
    $curlError = curl_error($curl);

    // Debug: Log Response and Errors
    file_put_contents("sms_debug_log.txt", "Response: $response\nError: $curlError\n");

    if ($curlError) {
        echo json_encode(["form" => ["message" => "Registration successful but SMS failed: $curlError"]]);
    } else {
        $result = json_decode($response, true);
        if (isset($result['messages'][0]['status']['groupName']) && $result['messages'][0]['status']['groupName'] === "DELIVERED") {
            echo json_encode(["message" => "Registration successful. SMS sent successfully!"]);
        } else {
            echo json_encode(["form" => ["message" => "SMS sending failed: " . ($result['messages'][0]['status']['description'] ?? 'Unknown error')]]);
        }
    }

    curl_close($curl);
    // SMS Code End Here
} else {
    echo json_encode(["form" => ["message" => "Error: " . $stmt->error]]);
}


// Close the database connection
$stmt->close();
$conn->close();
?>
