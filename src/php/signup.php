<?php
//Llamada al archivo de conexión.
include("connection.php");
//Recibimos los datos del formulario y los almacenamos en variables.
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$admin = false;
//Verificamos que todos los campos son cubiertos.
if ($user != NULL and $password != NULL and $email != NULL) {
  //Comprobamos que el usuario no está registrado
  $username_select_query = "SELECT * FROM users WHERE username = '$username'";
  $username_verify = mysqli_query($connection, $username_select_query);
  if (mysqli_num_rows($username_verify) > 0) {
    echo "Usuario ya registrado";
    exit;
  }
  //Registramos al usuario.
  $signup_insert_query = "INSERT INTO users(username, password, email, admin) VALUES ('$username','$password','$email','$admin')";
  $signup_insert = mysqli_query($connection, $signup_insert_query);
  //Comprobamos que no haya errores al registrarse y redirigimos.
  if (!$signup_insert)
    echo "Error al registrarse";
  else
    header("Location: ../signup_ok.html");
} else
  echo "Error de campos";
//Cierre de conexión.
mysqli_close($connection);
