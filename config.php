<?php
// Simple database connection
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'sustainable_eating_db';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
