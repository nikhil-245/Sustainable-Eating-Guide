-- Simple Database Setup for Login
-- Run this in phpMyAdmin

-- Create the database
CREATE DATABASE IF NOT EXISTS sustainable_eating_db;

-- Use the database
USE sustainable_eating_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert a test user
INSERT INTO users (username, password) VALUES ('admin', 'admin123');
