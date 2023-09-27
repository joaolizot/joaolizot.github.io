<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    $destinatario = "premtrabajo@gmail.com";
    
    $asunto = "Nuevo mensaje de $nombre";
    
    $mensajeCorreo = "Nombre: $nombre\n";
    $mensajeCorreo .= "Correo Electrónico: $email\n\n";
    $mensajeCorreo .= "Mensaje:\n$mensaje";
    
 
    mail($destinatario, $asunto, $mensajeCorreo);
    

    header("Location: confirmacion.html"); 
}
?>
