<?php
require 'config.php';

// Check if form data exists
if (!isset($_POST['username']) || !isset($_POST['password'])) {
    header("Location: login.html?error=empty");
    exit();
}

$username = trim($_POST['username']);
$password = trim($_POST['password']);

// Validate that fields are not empty
if (empty($username) || empty($password)) {
    header("Location: login.html?error=empty");
    exit();
}

// Check if user exists in database
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Login successful - redirect with success message
    header("Location: login.html?login=success");
} else {
    // Login failed - show error
    header("Location: login.html?error=invalid");
}

$conn->close();
?>
