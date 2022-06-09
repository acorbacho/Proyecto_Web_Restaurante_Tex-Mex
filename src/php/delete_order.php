<?php
//Llamada al archivo de conexión.
include("connection.php");
//Recibimos los datos del formulario y los almacenamos en variables.
$order_id = $_POST["order_id"];
//Construímos las querys de comprobación y las guardamos en variables.
$dishes_select_query = "SELECT order_dish_1, order_dish_2, order_dish_3, order_dish_4, order_dish_5, order_dish_6, 
order_dish_7, order_dish_8, order_dish_9, order_dish_10 FROM orders WHERE order_id = '$order_id'";
//Lanzamos un bucle para almacenar los platos del pedido en variables.
$order_dish = array();
$dishes_query = mysqli_query($connection, $dishes_select_query);
while ($row = mysqli_fetch_assoc($dishes_query)) {
  $order_dish[1] = $row['order_dish_1'];
  $order_dish[2] = $row['order_dish_2'];
  $order_dish[3] = $row['order_dish_3'];
  $order_dish[4] = $row['order_dish_4'];
  $order_dish[5] = $row['order_dish_5'];
  $order_dish[6] = $row['order_dish_6'];
  $order_dish[7] = $row['order_dish_7'];
  $order_dish[8] = $row['order_dish_8'];
  $order_dish[9] = $row['order_dish_9'];
  $order_dish[10] = $row['order_dish_10'];
}
//Con el siguiente contador, se cuentan los índices de "$oder_dish" que no son nulos, para luego recorrer solo esos.
$counter = 0;
for ($i = 1; $i <= 10; $i++) {
  if ($order_dish[$i] !== NULL) {
    $counter++;
  }
}

//Creamos un array de consultas a los ingredientes de cada plato.
$ingredients_select_query = array();
for ($i = 1; $i <= $counter; $i++) {
  $ingredients_select_query[$i] = "SELECT ingredient_name_1, ingredient_1_amount, ingredient_name_2, ingredient_2_amount, 
ingredient_name_3, ingredient_3_amount, ingredient_name_4, ingredient_4_amount, 
ingredient_name_5, ingredient_5_amount, ingredient_name_6, ingredient_6_amount 
FROM dishes WHERE dish_name = '$order_dish[$i]'";
}

/**
 * Recorremos en un bucle todas las consultas realizadas arriba, guardadas en un array.
 * Guardamos el nombre de los ingredientes en una matriz, y su cantidad a sustraer en otra matriz,
 * que asocia fila con número de plato, y columna con número del ingrediente del plato.
 */
$ingredient_name = array();
$ingredient_amount = array();
for ($i = 1; $i <= $counter; $i++) {
  $ingredients_query = mysqli_query($connection, $ingredients_select_query[$i]);
  while ($row = mysqli_fetch_assoc($ingredients_query)) {
    $ingredient_name[$i][1] = $row['ingredient_name_1'];
    $ingredient_name[$i][2] = $row['ingredient_name_2'];
    $ingredient_name[$i][3] = $row['ingredient_name_3'];
    $ingredient_name[$i][4] = $row['ingredient_name_4'];
    $ingredient_name[$i][5] = $row['ingredient_name_5'];
    $ingredient_name[$i][6] = $row['ingredient_name_6'];
    $ingredient_amount[$i][1] = $row['ingredient_1_amount'];
    $ingredient_amount[$i][2] = $row['ingredient_2_amount'];
    $ingredient_amount[$i][3] = $row['ingredient_3_amount'];
    $ingredient_amount[$i][4] = $row['ingredient_4_amount'];
    $ingredient_amount[$i][5] = $row['ingredient_5_amount'];
    $ingredient_amount[$i][6] = $row['ingredient_6_amount'];
  }
}

/**
 * Creamos un bucle anidado que recorra todos los los ingredientes y sus cantidades almacenadas,
 * que serán utilizadas en las consultas.
 * Aprovechamos el bucle anidado para guardar las consultas, también en una matriz de dimensiones iguales
 * al número de ingredientes.
 */
$ingredients_update_query = array();
for ($i = 1; $i <= $counter; $i++) {
  for ($j = 1; $j <= 6; $j++) {
    $ingredients_update_query[$i][$j] = "UPDATE ingredients_stock SET ingredient_stock =ingredient_stock-'" . $ingredient_amount[$i][$j] . "' WHERE ingredient_name = '" . $ingredient_name[$i][$j] . "'";
  }
}

//Se lanzan las consultas iterando con el mismo bucle anidado con el que fueron creadas.
for ($i = 1; $i <= $counter; $i++) {
  for ($j = 1; $j <= 6; $j++) {
    $update_query = mysqli_query($connection, $ingredients_update_query[$i][$j]);
  }
}

//Por último se crea la consulta que elimine el pedido de la lista de pedidos.
$order_delete_query = "DELETE FROM orders WHERE order_id = '$order_id'";

//Se lanza la consulta y se imprime un mensaje de comprobación.
if (mysqli_query($connection, $order_delete_query) == TRUE) {
  echo "Pedido aceptado con éxito.";
} else {
  echo "Error.";
}
