<?php
//Archivo de conexión con los datos de la db, comprueba la conexión y lanza mensaje de error en caso de problema de autenticación.
$server = "localhost";
$user = "root";
$pass = "";
$db = "restaurant";
$connection = mysqli_connect($server, $user, $pass, $db) or die("Error al conectar con la db." . mysqli_connect_error());
