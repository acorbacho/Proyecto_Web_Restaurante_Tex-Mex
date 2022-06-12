<?php
//Incluímos el archivo de conexión.
include("connection.php");
//Creamos una clase para los platos.
class Dish {
  public $dish_name;
  public $price;
  function __construct($dish_name, $price) {
    $this->dish_name = $dish_name;
    $this->price = $price;
  }
}
//Ejecutamos las queries.
$query = "SELECT dish_name, price FROM dishes";
$result = $connection->query($query);
//Creamos un array donde guardaremos todos los platos.
$dishes = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $aux_dish = new Dish($row["dish_name"], $row["price"]);
    array_push($dishes, $aux_dish);
  }
} else {
  print "Error al insertar los valores: " . $connection->error;
}
//Imprimimos el array de objetos en JSON.
echo json_encode($dishes);
