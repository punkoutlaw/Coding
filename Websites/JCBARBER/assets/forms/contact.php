<?php

## CONFIG ##

# LIST EMAIL ADDRESS
$recipient = "gardenstatebarber@gmail.com";

# SUBJECT (Subscribe/Remove)
$subject = "Garden State Barbershop Inquiry";

# RESULT PAGE
$location = "/contact";

## FORM VALUES ##

# SENDER - WE ALSO USE THE RECIPIENT AS SENDER IN THIS SAMPLE
# DON'T INCLUDE UNFILTERED USER INPUT IN THE MAIL HEADER!
$sender = $recipient;

# MAIL BODY
$body .= "Name: ".$_REQUEST['name']." \n";
$body .= "Email: ".$_REQUEST['email']." \n";
$body .= "Subject: ".$_REQUEST['subject']." \n";
$body .= "Message: ".$_REQUEST['message']." \n";
# add more fields here if required

## SEND MESSAGE ##

mail( $recipient, $subject, $body, "From: $sender" ) or die ("Mail could not be sent.");

## SHOW RESULT PAGE ##

header( "Location: $location" );
?>