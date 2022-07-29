<?php

// check the honeypot
$honeypot = filter_input(INPUT_POST, 'nickname', FILTER_UNSAFE_RAW);
if ($honeypot) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 405 Method Not Allowed');
    exit;
}

// validate subject
$subject = filter_input(INPUT_POST, 'subject', FILTER_UNSAFE_RAW);
$inputs['subject'] = $subject;
// if (!$subject || trim($subject) === '') {
//     $errors['subject'] = 'Please enter the subject';
// }

// validate name
$name = filter_input(INPUT_POST, 'name', FILTER_UNSAFE_RAW);
$inputs['name'] = $name;
if (!$name || trim($name) === '') {
    $errors['name'] = 'Please enter your company name';
}

// validate employees
$employees = filter_input(INPUT_POST, 'employees', FILTER_UNSAFE_RAW);
$inputs['employees'] = $employees;
if (!$employees || trim($employees) === '') {
    $errors['employees'] = 'Please enter number of employees';
}

// validate coverage
$coverage = filter_input(INPUT_POST, 'coverage', FILTER_UNSAFE_RAW);
$inputs['coverage'] = $coverage;
if (!$coverage || trim($coverage) === '') {
    $errors['coverage'] = 'Please enter your current coverage';
}

// validate telephone
$telephone = filter_input(INPUT_POST, 'telephone', FILTER_UNSAFE_RAW);
$inputs['telephone'] = $telephone;
if (!$telephone || trim($telephone) === '') {
    $errors['telephone'] = 'Please enter your telephone number';
}

// validate email
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$inputs['email'] = $email;
if ($email) {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    if (!$email) {
        $errors['email'] = 'Please enter a valid email';
    }
} else {
    $errors['email'] = 'Please enter an email';
}

// validate location
$location = filter_input(INPUT_POST, 'location', FILTER_UNSAFE_RAW);
$inputs['location'] = $location;
if (!$location || trim($location) === '') {
    $errors['location'] = 'Please enter your location';
}