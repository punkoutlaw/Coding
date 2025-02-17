<?php

session_start();

$errors = [];
$inputs = [];

$request_method = strtoupper($_SERVER['REQUEST_METHOD']);

if ($request_method === 'GET') {

    // show the message
    if (isset($_SESSION['message'])) {
        $message = $_SESSION['message'];
        unset($_SESSION['message']);
    } elseif (isset($_SESSION['inputs']) && isset($_SESSION['errors'])) {
        $errors = $_SESSION['errors'];
        unset($_SESSION['errors']);
        $inputs = $_SESSION['inputs'];
        unset($_SESSION['inputs']);
    }
} if ($request_method === 'POST') {
    // check the honeypot and validate the field
    require_once __DIR__ . '/inc/post.php';

    if (!$errors) {
        // send an email
        require_once __DIR__ . '/inc/mail.php';
        // set the message
        $_SESSION['Thank you for contacting us!'];
    } else {
        $_SESSION['errors'] =   $errors;
        $_SESSION['inputs'] =   $inputs;
    }
    
echo '<script type="text/javascript">
       window.onload = function () { alert("Thank you for contacting us!"); 
       location="/contact.html";
       } 
</script>';

}