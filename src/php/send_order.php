<?php
//Incluímos el archivo de conexión.
include("connection.php");
//Almacenamos los parámetros de entrada.
$order_id = $_POST["order_id"];
$username = $_POST["username"];
$total = $_POST["total"];
$dishes_array = $_POST["dishes_name"];
//Elaboramos una estructura que nos permita intrododucir un número de platos variable
//teniendo en cuenta que siempre debe  tener al menos 1 plato.
$dishes_query = "'" . $dishes_array[0] . "'";
for ($i = 1; $i < 10; $i++) {
  if (!isset($dishes_array[$i])) {
    $dishes_query = $dishes_query . "," . 'NULL' . "";
  } else {
    $dishes_query = $dishes_query . ",'" . $dishes_array[$i] . "'";
  }
}
//Creación de la consulta.
$query = "INSERT INTO orders
VALUES('$order_id','$username','$total',$dishes_query)";
if ($connection->query($query) == TRUE) {
  echo "Pedido realizado.";
} else {
  echo "Error al insertar los valores: " . $connection->error;
}
