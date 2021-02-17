<?php
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $header = 'From: ' .$email . "\r\n";
    $header .= "X-Mailer: PHP/". phpversion(). "\r\n"; 
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
    $mensaje .= "Su email es: " . $email . "\r\n";
    $mensaje .= "Asunto: " .$asunto . "\r\n";
    $mensaje .= "Mensaje: " . $_POST['mensaje'] . "\r\n";
    
    $para = 'rosalinisamuel@gmail.com';
    $tema = "Asunto del mail recibido";

    mail($para, $tema, utf8_decode($mensaje, $header));

    header("Location: index.html");
?>