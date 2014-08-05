<?php
require 'vendor/autoload.php';

// constants
$email_to = "dianeyang@college.harvard.edu";
$sendgrid_username = getenv('SENDGRID_USERNAME');
$sendgrid_password = getenv('SENDGRID_PASSWORD');

// data from the user
$name = $_POST["name"];
$email_from = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$message .= "\r\n\n----------";
$message .= "\r\nSent by " . $name . " (" . $email_from . ") via contact form.";

// send it away!
$sendgrid = new SendGrid($sendgrid_username, $sendgrid_password);

$toSend = new SendGrid\Email();
$toSend->addTo($email_to)->
		addHeader('From', $name)->
        setFrom($email_from)->
        setSubject($subject)->
        setText($message);
$response = $sendgrid->send($toSend);

?>