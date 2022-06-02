/**
 * Clase que crea el modelo, encargado de los datos.
 */
class Model {
  /**
   * Constructior de clase.
   */
  constructor() {
    //Array que almacena los objetos "dishes".
    this.dishes = []
    //Carrito que almacena los "dishes" que el usuario decide comprar.
    this.cart = []
    //Se almacenan las "orders" que están pendientes en el restaurante.
    this.orders = []
  }

  /**
   * Función para obtener los platos del array de platos.
   * @param {*} _name Nombre del plato. 
   * @returns {Object}
   */
  getDish(_name) {
    return this.dishes.find(_dish => _dish.name === _name)
  }

  /**
   * Función para obtener los platos del carrito.
   * @param {*} _name Nombre del plato. 
   * @returns {Object}
   */
  getItem(_name) {
    return this.cart.find(_item => _item.name === _name)
  }

  /**
   * Función que devuelve una orden.
   * @param {*} _id ID de la orden.
   * @returns {Object}
   */
  getOrder(_id) {
    return this.orders.find(_order => _order.id === _id)
  }

  setDishes() {
    //Llamada a PHP trayendo los dishes.
    let resp = []
    $.ajax({
      url: 'dishes.php',
      type: 'GET',
      async: false,
      success: function (response) {
        resp = JSON.parse(response)
      }
    })
    this.dishes = resp
  }

  /**
   * Función que mete un plato en el carrito y lo devuelve.
   * @param {*} _name Nombre del plato. 
   * @returns {Object}
   */
  setItem(_name) {
    /**
     * Constante que almacena un nuevo objeto buscado entre los platos.
     * @type {Object}
     */
    const new_item = this.dishes.find(_item => _item.name === _name)
    //Se mete el objeto en el carrito.
    this.cart.push(new_item)
    return new_item
  }

  /**
   * Función que mete una orden en el listado de pedidos y la devuelve.
   * @param {*} _id ID de la orden.
   * @param {*} _username Nombre de usuario de la orden.
   * @returns {Object}
   */
  setOrder(_id, _username) {
    /**
     * Constante que almacena un nuevo plato creado a partir de un ID, un usuario y el carrito.
     * @type {Object}
     */
    const new_order = new Order(_id, _username, this.cart)
    //Se mete la orden en el listado de pedidos.
    this.orders.push(new_order)
    return new_order
  }

  /**
   * Función que quita un plato del carrito y lo devuelve.
   * @param {*} _name Nombre del plato. 
   * @returns {Object}
   */
  removeItem(_name) {
    /**
     * Constante que almacena el item que se elimina del carrito,
     * despues de buscarse en el carrito.
     * @type {Object}
     */
    const old_item = this.cart.find(_item => _item.name === _name)
    /**
     * Constante que almacena el indice del objeto del carrito que se quiere eliminar.
     * @type {Object}
     */
    const old_item_index = array.indexOf(old_item)
    //Se elimina el plato del carrito.
    this.cart.splice(old_item_index, 1)
    return old_item
  }

  /**
   * Función que quita una orden del listado de pedidos y la devuelve.
   * @param {*} _id ID de la orden.
   * @returns {Object}
   */
  removeOrder(_id) {
    /**
     * Constante que almacena la orden a eliminar.
     * @type {Object}
     */
    const old_order = this.orders.find(_order => _order.id === _id)
    /**
     * Constante que almacena el índice de la orden a elminar.
     * @type {Object}
     */
    const old_order_index = array.indexOf(order)
    //Se elimina el pedido del array de pedido.
    this.orders.splice(old_order_index, 1)
    return old_order
  }
}