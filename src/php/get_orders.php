<?php
//Incluímos el archivo de conexión.
include("connection.php");
//Creamos una clase para los pedidos.
class Order {
  public $order_id;
  public $username;
  public $total;
  function __construct($order_id, $username, $total) {
    $this->order_id = $order_id;
    $this->username = $username;
    $this->total = $total;
  }
}
//Ejecutamos las queries.
$query = "SELECT order_id, username, total FROM orders";
$result = $connection->query($query);
//Creamos un array donde guardaremos todos los pedidos.
$orders = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $aux_order = new Order($row["order_id"], $row["username"], $row["total"]);
    array_push($orders, $aux_order);
  }
} else {
  print "Error al insertar los valores: " . $connection->error;
}
//Imprimimos el array de objetos en JSON.
echo json_encode($orders);
