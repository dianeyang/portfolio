<?php
 
$email_to = "dianeyang@college.harvard.edu";

$name = $_POST["name"];
$email_from = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$message .= "\r\n\n----------";
$message .= "\r\nSent by " . $name . " (" . $email_from . ") via contact form.";

$headers = "From: ". $name . " <" . $email_from.">\r\n";
$headers .= "Reply-To: " . $email_from . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
mail($email_to, $subject, $message, $headers);

?>