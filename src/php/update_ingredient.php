<?php
//Incluímos el archivo de conexión.
include("connection.php");
//Almacenamos los parámetros de entrada.
$ingredient_name = $_POST["ingredient_name"];
$ingredient_amount = $_POST["ingredient_amount"];

//Creamos la query para sumar el ingrediente.
$ingredients_update_query = "UPDATE ingredients_stock SET ingredient_stock =ingredient_stock+'" . $ingredient_amount . "' WHERE ingredient_name = '" . $ingredient_name . "'";

// Se lanza la consulta
if (mysqli_query($connection, $ingredients_update_query)) {
  echo "Stock actualizado con éxito.";
} else {
  echo "Error.";
}
