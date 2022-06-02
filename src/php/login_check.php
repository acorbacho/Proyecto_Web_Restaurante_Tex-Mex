<?php
//Llamada al archivo de conexión.
include("connection.php");
//Recibimos los datos del formulario y los almacenamos en variables.
$username = $_GET["username"];
$password = $_GET["password"];
//Construímos las querys de comprobación y las guardamos en variables.
$username_select_query = "SELECT username FROM users WHERE username = '$username'";
$password_select_query = "SELECT password FROM users WHERE password = '$password' AND username='$username'";
//Lanzamos las querys y las guardamos en variables.
$username_verify = mysqli_query($connection, $username_select_query);
$password_verify = mysqli_query($connection, $password_select_query);
/**
 * Verificamos si el usuario existe. Si no existe retorna "username_error".
 * Verificamos si la contraseña coincide con la del usuario. Si no coincide retorna "password_error".
 * Si todo está correcto, retorna "true".
 * */
if (mysqli_num_rows($username_verify) == 0)
  echo "username_error";
else if (mysqli_num_rows($password_verify) == 0) {
  echo "password_error";
} else {
  return true;
}
//Cierre de conexión.
mysqli_close($connection);
