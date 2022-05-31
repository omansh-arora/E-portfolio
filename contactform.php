<?php

if (isset($_POST['submit'])) {

    $name = $_POST['name']
    $mail = $_POST['mail']
    $subject = $_POST['subject']
    $message = $_POST['message']

    $mailTo = "omansharora@yahoo.com"
    $headers = "From: ePortfolio" . $mail
    $txt = "You have receieved an email from " .$name.".\n\n".$message


    mail($mailTo, $subject, $txt, $headers)
    header("Location: index.php?mailsend")

}