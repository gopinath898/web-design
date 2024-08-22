<?php
if($_POST['reserv_name'] != ""){
		$to = "shamsa@projects.ads";
		$from =  $_POST["reserv_email"];
		$message = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Name: </strong>".$_POST["reserv_name"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Date Address: </strong>".$_POST["datepicker"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Time: </strong>".$_POST["reserv_time"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp; <strong>No. of Persons: </strong>".$_POST["reserv_persons"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp; <strong>Email Address: </strong>".$_POST["reserv_email"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp; <strong>Phone No: </strong>".$_POST["reserv_phone"]."<br />";
		$subject = 'Book a Table Reservation';		
		$headers = "From: ".$_POST["reserv_email"]."\n";
		$headers .= "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
		
	    $send =	mail($to,$subject,$message,$headers);



if($send)
{
	echo "success";
}
else
{
	echo "error";
}

}



if($_POST['name'] != ""){
		$to = "shamsa@projects.ads";
		$from =  $_POST["email_address"];
		$message = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Name: </strong>".$_POST["name"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email Address: </strong>".$_POST["email_address"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Message: </strong>".$_POST["msg"]."<br />";
		$subject = 'Contact Enquiry';		
		$headers = "From: ".$_POST["email_address"]."\n";
		$headers .= "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
		
	    $send =	mail($to,$subject,$message,$headers);



if($send)
{
	echo "success";
}
else
{
	echo "error";
}

}


if($_POST['nws_email_address'] != ""){
		$to = "shamsa@projects.ads";
		$from =  $_POST["nws_email_address"];
		$message = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email Address: </strong>".$_POST["nws_email_address"]."<br />";
		$subject = 'Newsletter Subscription';		
		$headers = "From: ".$_POST["nws_email_address"]."\n";
		$headers .= "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
		
	    $send =	mail($to,$subject,$message,$headers);



if($send)
{
	echo "success";
}
else
{
	echo "error";
}

}


?>