<?php
//Incluímos el archivo de conexión.
include("connection.php");
//Creamos una clase para los platos.
class Ingredients {
  public $ingredient_name;
  public $ingredient_stock;
  function __construct($ingredient_name, $ingredient_stock) {
    $this->ingredient_name = $ingredient_name;
    $this->ingredient_stock = $ingredient_stock;
  }
}
//Ejecutamos las queries.
$query = "SELECT ingredient_name, ingredient_stock FROM ingredients_stock";
$result = $connection->query($query);
//Creamos un array donde guardaremos todos los ingredientes.
$ingredients = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $aux_ingredient = new Ingredients($row["ingredient_name"], $row["ingredient_stock"]);
    array_push($ingredients, $aux_ingredient);
  }
} else {
  print "Error al insertar los valores: " . $connection->error;
}
//Imprimimos el array de objetos en JSON.
echo json_encode($ingredients);
