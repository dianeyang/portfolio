<?php
 
if(isset($_POST['emailForm'])) { 
    $email_to = "dianeyang@college.harvard.edu";
 
    $first_name = $_POST['name'];
    $email_from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $subject, $message, $headers);  
 
?>