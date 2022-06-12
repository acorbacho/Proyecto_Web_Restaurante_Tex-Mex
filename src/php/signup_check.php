<?php
//Llamada al archivo de conexión.
include("connection.php");
//Recibimos los datos del formulario y los almacenamos en variables.
$username = $_GET["username"];
//Construímos la query de comprobación y la guardamos en una variable.
$username_select_query = "SELECT username FROM users WHERE username = '$username'";
//Lanzamos las querys y la guardamos en una variable.
$username_verify = mysqli_query($connection, $username_select_query);
/**
 * Verificamos si el usuario existe. Si no existe retorna "true", y si existe, retorna "false".
 * Así indicamos que el nombre de usuario está o no disponible.
 * */
if (mysqli_num_rows($username_verify) == 0)
  echo true;
else {
  echo false;
}
//Cierre de conexión.
mysqli_close($connection);
