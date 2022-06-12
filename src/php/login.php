<?php
//Llamada al archivo de conexión.
include("connection.php");
//Recibimos los datos del formulario y los almacenamos en variables.
$username = $_GET["username"];
$password = $_GET["password"];
//Construímos las querys de comprobación y las guardamos en variables.
$username_select_query = "SELECT username FROM users WHERE username = '$username'";
$password_select_query = "SELECT password FROM users WHERE password = '$password' AND username='$username'";
$isAdmin_select_query = "SELECT admin FROM users WHERE admin = 1 AND username='$username'";
//Lanzamos las querys y las guardamos en variables.
$username_verify = mysqli_query($connection, $username_select_query);
$password_verify = mysqli_query($connection, $password_select_query);
$admin_verify = mysqli_query($connection, $isAdmin_select_query);

//Verificamos si el usuario existe.
if (mysqli_num_rows($username_verify) == 0)
  echo "Usuario inexistente.";
//Si existe el usuario...
else {
  //Comprobamos que las contraseñas coincidan e iniciamos la sesión.
  if (mysqli_num_rows($password_verify) > 0) {
    session_start();
    $_SESSION["username"] = $username;
    //Redireccionamos segun el tipo de usuario.
    if (mysqli_num_rows($admin_verify) == 0) {
      header("Location: user_panel.php");
    } else {
      header("Location: admin_panel.php");
    }
  } else
    echo "Contraseña incorrecta.";
}
//Cierre de conexión.
mysqli_close($connection);
