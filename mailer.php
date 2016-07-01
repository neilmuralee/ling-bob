<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $first_name = strip_tags(trim($_POST["first_name"]));
		$first_name = str_replace(array("\r","\n"),array(" "," "),$first_name);
        $last_name = strip_tags(trim($_POST["last_name"]));
		$last_name = str_replace(array("\r","\n"),array(" "," "),$last_name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $enquiry = trim($_POST["enquiry"]);

        // Check that data was sent to the mailer.
        if ( empty($enquiry) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            header("HTTP/1.0 400 Bad Request");
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "contactme@iamgaz.co.uk";

        // Set the email subject.
        $subject = "Ling Bob website message from $first_name $last_name";

        // Build the email content.
        $email_content = "Name: $first_name $last_name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Phone: $phone\n\n";
        $email_content .= "Enquiry:\n$enquiry\n";

        // Build the email headers.
        
        $email_headers = "From: $email";
        
        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            header("HTTP/1.0 200 Ok");
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            header("HTTP/1.0 500 Internal Server Error");
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        header("HTTP/1.0 403 Forbidden");
        echo "There was a problem with your submission, please try again.";
    }

?>