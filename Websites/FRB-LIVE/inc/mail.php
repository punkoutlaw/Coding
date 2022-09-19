<?php

// get email from the config file
$config = require_once __DIR__ . '/../config/app.php';
$recipient_email = $config['mail']['to_email'];

// contact information
$contact_name = $inputs['name'];
$contact_email = $inputs['email'];
$subject = $inputs['subject'];
$message = $inputs['message'];

// Email header
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = "To: $recipient_email";
$headers[] = "From: $contact_email";
$header = implode('\r\n', $headers);

$body = "\nName: " . $contact_name . "\nEmail Address: " . $contact_email . "\nMessage: " . $message;
mail($recipient_email, $subject, $body, $header);