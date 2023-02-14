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
        $_SESSION['Thanks for contacting us, we will be in touch shortly!'];
    } else {
        $_SESSION['errors'] =   $errors;
        $_SESSION['inputs'] =   $inputs;
    }
    
echo '<script type="text/javascript">
       window.onload = function () { alert("Thanks for your inquiry!"); 
       location="contact.html";
       } 
</script>';

}