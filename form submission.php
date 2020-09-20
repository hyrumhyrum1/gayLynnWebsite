<?php
 $name = $_POST['name'];
 $visitor_email = $_POST['email'];
 $phone_number = $_POST['phone number'];
 $message = $_POST['message'];

 $email_from = "hyrum.hansen1@gmail.com";
 $email_subject = "New Form Submission";
 $email_body = "Name: $name.\n"
               "Email: $visitor_email.\n"
               "Phone Number: $phone_number.\n"
               "Message: $message.\n";
$to = "hyrum.hansen1@gmail.com";
$headers = "From: $email_from \r\n";
$headers .="Reply-To: $visitor_email \r";
 
mail($to, $email_subject, $email_body, $headers);

header("Location: contact.html");

?>