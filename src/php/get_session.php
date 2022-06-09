<?php
//Incluímos el archivo de conexión.
include("connection.php");
//Intentamos iniciar la sesión.
session_start();
//Desactivamos el reporte de errores para evitar que salgan en la página.
error_reporting(0);
//Guardamos la sesión y comprobamos si la sesión es de un admin.
$session = $_SESSION["username"];
//Devolvemos el usuario que ha iniciado sesión.
echo $session;
