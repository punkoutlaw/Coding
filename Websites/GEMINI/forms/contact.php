<?php

## CONFIG ##

# LIST EMAIL ADDRESS
$recipient = "dwfeudale@gmail.com";

# SUBJECT (Subscribe/Remove)
$subject = "New Quote Request";

# RESULT PAGE
$location = "/quotes.html";

## FORM VALUES ##

# SENDER - WE ALSO USE THE RECIPIENT AS SENDER IN THIS SAMPLE
# DON'T INCLUDE UNFILTERED USER INPUT IN THE MAIL HEADER!
$sender = $recipient;

# MAIL BODY
$body .= "Name: ".$_REQUEST['name']." \n";
$body .= "Number of Employees: ".$_REQUEST['employees']." \n";
$body .= "Current Coverage: ".$_REQUEST['coverage']." \n";
$body .= "Telephone #: ".$_REQUEST['telephone']." \n";
$body .= "Email Address: ".$_REQUEST['email']." \n";
$body .= "Location: ".$_REQUEST['location']." \n";

# add more fields here if required

## SEND MESSGAE ##

mail( $recipient, $subject, $body, "From: $sender" ) or die ("Mail could not be sent.");

## SHOW RESULT PAGE ##

header( "Location: $location" );
?>