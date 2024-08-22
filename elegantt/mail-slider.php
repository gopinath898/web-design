<?php 

	$to = ""; // this is your Email address
	$from  = $_POST['email']; // this is the sender's Email address
	$sender_name = $_POST['name'];
	$consult_topic = $_POST['topic'];
	$notes = $_POST['message'];

	$message = $sender_name . " has send the contact message. " .  $consult_topic . " is his / her consult topic. He / she worte the following... ". "\n\n" . $notes;


	$subject = "Form submission";

	$headers = 'From: ' . $from;
	mail($to, $subject, $message, $headers);

?>















