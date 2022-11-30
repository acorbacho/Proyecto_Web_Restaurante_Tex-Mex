/**
 * Clase que crea el modelo, encargado de los datos.
 */
class Model {
  /**
   * Constructior de clase.
   */
  constructor() {
    //Array que almacena los objetos "dishes" traídos de la base de datos.
    this.dishes = []
    //Carrito que almacena los "dishes" que el usuario decide comprar.
    this.cart = []
    //Se almacenan las "orders" que están pendientes en el restaurante (solo panel admin).
    this.orders = []
    //Se almacenan los ingredientes procedentes de la base de datos.
    this.ingredients = []
  }

  /**
   * Función dedicada a consultar el nombre de usuario que ha iniciado sesión.
   * @returns {*} 
   */
  whoAmI() {
    /**
     * Variable que almacena el nombre de usuario.
     * @type {*}
     */
    let username
    //Consulta del nombre de usuario a PHP. 
    $.ajax({
      url: 'get_session.php',
      type: 'GET',
      async: false,
      success: function (response) {
        username = response
      }
    })
    return username
  }

  /**
   * Función para obtener los platos del array de platos disponibles.
   * @returns {Array} Platos.
   */
  getDishes() {
    return this.dishes
  }

  /**
   * Función para obtener los platos del carrito.
   * @returns {Array} Items.
   */
  getItems() {
    return this.cart
  }

  /**
   * Función que devuelve las ordenes existentes.
   * @returns {Array} Pedidos.
   */
  getOrders() {
    return this.orders
  }

  /**
   * Función que devuelve una orden.
   * @param {*} _id ID de la orden.
   * @returns {Object} Pedido.
   */
  getOrder(_id) {
    return this.orders.find(_order => _order.id === _id)
  }

  /**
   * Función que mete un plato de la lista de platos en el carrito,
   * pasándole el índice por parámetro, y lo devuelve.
   * @param {number} _index Índice del plato. 
   * @returns {Object}
   */
  setItem(_index) {
    /**
     * Constante que almacena un nuevo objeto buscado entre los platos.
     * @type {Object}
     */
    const new_item = this.dishes[_index]
    //Se mete el objeto en el carrito.
    this.cart.push(new_item)
    return new_item
  }

  /**
   * Función que almacena un pedido en la base de datos.
   * @param {*} _id ID de la orden.
   * @param {*} _username Nombre de usuario de la orden.
   * @returns {*} Mensaje de confirmación/error.
   */
  storageOrder() {
    /**
     * Variable que almacena el nombre de usuario que inicia sesión.
     * @type {*}
     */
    let username
    //Se consulta el usuario que ha iniciado sesión a PHP.
    $.ajax({
      url: 'get_session.php',
      type: 'GET',
      async: false,
      success: function (response) {
        username = response
      }
    })
    /**
     * Constante que guarda la fecha actual.
     * @type {Object}
     */
    const date = new Date()
    /**
     * Constante que guarda las horas de la fecha actual.
     * @type {number}
     */
    const hours = date.getHours()
    /**
     * Constante que guarda los minutos de la fecha actual.
     * @type {number}
     */
    const minutes = date.getMinutes()
    /**
     * Constante que guarda los segundos de la fecha actual.
     * @type {number}
     */
    const seconds = date.getSeconds()
    /**
     * Constante que guarda los milisegundos de la fecha actual.
     * @type {number}
     */
    const milliseconds = date.getMilliseconds()
    /**
     * Se genera un ID para el pedido concatenando la hora con minutos, segundos y milisegundos 
     * en la que fue hecho el pedido con los 3 primeros dígitos del usuario.
     * @type {*}
     */
    const order_id = hours + '' + minutes + seconds + milliseconds + username.slice(0, 3).toUpperCase()
    /**
     * Variable que almacena el nombre de los platos del carrito del pedido.
     * @type {Array}
     */
    let order_dishes_name = []
    /**
     * Variable que almacena el total del pedido.
     * @type {number}
     */
    let order_total = 0

    //Obtenemos el total del pedido.
    for (let i = 0; i < this.cart.length; i++) {
      order_dishes_name[i] = this.cart[i].dish_name
      order_total = order_total + parseFloat(this.cart[i].price)
    }
    /**
     * Almacena la respuesta que devuelve PHP cuando se sube el pedido a la db,
     * proveniente de la petición por AJAX.
     * @type {*}
     */
    let aux_response
    //Subimos el pedido a la db.
    $.ajax({
      data: {
        'order_id': order_id,
        'username': username,
        'dishes_name': order_dishes_name,
        'total': order_total
      },
      url: 'send_order.php',
      type: 'POST',
      async: false,
      success: function (response) {
        aux_response = response
      }
    })
    return aux_response
  }

  /**
   * Función que trae el listado de platos disponible de la base de datos.
   * @returns {Array}
   */
  loadDishes() {
    /**
     * Array que almacena la respuesta AJAX parseada a JSON.
     * @type {Array}
     */
    let parsed_response = []
    //Llamada a PHP trayendo los dishes.
    $.ajax({
      url: 'get_dishes.php',
      type: 'GET',
      async: false,
      success: function (response) {
        parsed_response = JSON.parse(response)
      }
    })
    return parsed_response
  }

  /**
   * Función que carga los pedidos de la base de datos y los almacena en
   * el array de pedidos del constructor, retornando este último.
   * @returns {*}
   */
  loadOrders() {
    /**
     * Array que almacena la respuesta AJAX parseada a JSON.
     * @type {Array}
     */
    let parsed_response = []
    //Llamada a PHP trayendo los pedidos almacenados.
    $.ajax({
      url: 'get_orders.php',
      type: 'GET',
      async: false,
      success: function (response) {
        parsed_response = JSON.parse(response)
      }
    })

    //Iteramos la respuesta, y de esta manera creamos objetos "Order" con los pedidos
    //en JSON que están en el array "parsed_response".
    for (let i = 0; i < parsed_response.length; i++) {
      /**
       * Constante que almacena el último objeto creado.
       * @type {Object}
       */
      const order = new Order(parsed_response[i].order_id, parsed_response[i].username, parsed_response[i].total)
      this.orders.push(order)
    }
    return this.orders
  }

  /**
   * Función que retorna todos los ingredientes de la base de datos.
   * @returns {Array} Ingredientes de la db.
   */
  loadIngredients() {
    /**
     * Array que almacena la respuesta AJAX parseada a JSON.
     * @type {Array}
     */
    let parsed_response = []
    //Llamada a PHP trayendo los ingredients.
    $.ajax({
      url: 'get_ingredients.php',
      type: 'GET',
      async: false,
      success: function (response) {
        parsed_response = JSON.parse(response)
      }
    })
    return parsed_response
  }

  /**
   * Función dedicada a reponer stock de un ingrediente en la db.
   * @param {*} _name Nombre del ingrediente.
   * @param {*} _amount Cantidad a añadir.
   * @returns {*} Respuesta desde PHP de si se ha hecho la inserción correctamente.
   */
  updateIngredients(_name, _amount) {
    /**
     * Constante que almacena el nombre del ingrediente,
     * traída por parámetro desde la vista.
     * @type {*}
     */
    const ingredient_name = _name
    /**
     * Constante que almacena la cantidad de ingrediente a añadir,
     * traída por parámetro desde la vista.
     * @type {number}
     */
    const ingredient_amount = _amount
    /**
     * Variable axuiliar que almacena la respuesta AJAX.
     * @type {*}
     */
    let aux_response
    //Se ejecuta la llamada AJAX.
    $.ajax({
      data: {
        'ingredient_name': ingredient_name,
        'ingredient_amount': ingredient_amount
      },
      url: 'update_ingredient.php',
      type: 'POST',
      async: false,
      success: function (response) {
        aux_response = response
      }
    })
    return aux_response
  }

  /**
   * Función que quita un plato del carrito y lo devuelve.
   * @param {*} _name Nombre del plato. 
   * @returns {Object} Elmento del carrito eliminado.
   */
  removeItem(_index) {
    /**
     * Constante que almacena el item que se elimina del carrito,
     * despues de buscarse en el carrito.
     * @type {Object}
     */
    const old_item = this.cart[_index]
    //Se elimina el plato del carrito.
    this.cart.splice(_index, 1)
    return old_item
  }

  /**
   * Función que quita una orden del listado de pedidos y la devuelve.
   * @param {*} _id ID de la orden.
   * @param {*} _index Indice de la orden en el array de pedidos.
   * @returns {*} Respuesta de PHP si la petición se ha completado correctamente.
   */
  removeOrder(_id, _index) {
    /**
     * Variable que almacena el ID del pedido, traida por parámetro desde la vista.
     * @type {*}
     */
    const order_id = _id
    let ajax_response
    $.ajax({
      data: {
        'order_id': order_id,
      },
      url: 'delete_order.php',
      type: 'POST',
      async: false,
      success: function (response) {
        ajax_response = response
      }
    })
    //Se elimina el pedido del array de pedido.
    this.orders.splice(_index, 1)
    return ajax_response
  }
}