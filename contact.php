<html>
    <head>
        <title>Contact Form</title>
    </head>
    
    <body>
        <?php

            $name = $_POST['name'];
            $email = $_POST['email'];
            $msg = $_POST['message'];

            $to = 'info@imagiwebdesign.com';
            $subject = 'Inquiry from website';
            $from = 'website@imagiwebdesign.com';

            mail($to, $subject, $msg, 'From:' . $from);

            echo 'Thank you! Your message has been sent. <a href="http://www.imagiwebdesign.com">Back</a>';

        ?>
    </body>

</html>

