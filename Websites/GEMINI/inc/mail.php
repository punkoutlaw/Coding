<?php

// get email from the config file
$config = require_once __DIR__ . '/../config/app.php';
$recipient_email = $config['mail']['to_email'];

// contact information
$company_name = $inputs['name'];
$employees = $inputs['employees'];
$coverage = $inputs['coverage'];
$telephone = $inputs['telephone'];
$location = $inputs['location'];
$contact_email = $inputs['email'];
$subject = $inputs['subject'];

// Email header
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = "To: $recipient_email";
$headers[] = "From: $contact_email";
$header = implode('\r\n', $headers);

$body = "\nCompany Name: " . $company_name . "\nNmber of Employees: " . $employees . "\nCurrent Coverage: " . $coverage . "\nTelephone Number: " . $telephone . "\nLocation: " . $location . "\nEmail Address: " . $contact_email;
mail($recipient_email, $subject, $body, $header);