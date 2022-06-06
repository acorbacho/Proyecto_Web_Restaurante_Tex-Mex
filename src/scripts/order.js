/**
 * Clase que crea los pedidos.
 */
class Order {
  /**
   * Constructor de la clase.
   * @param {*} id ID del pedido.
   * @param {*} username Nombre de usuario que realiza el pedido.
   * @param {Array} cart Array con los platos del pedido.
   */
  constructor(id, username, cart) {
    //Atributo "id".
    this.id = id
    //Atributo "username".
    this.username = username
    //Atributo "cart".
    this.dishes = cart
  }

  /**
   * Función de clase para obtener el ID.
   * @returns {*}
   */
  getID() {
    return this.id
  }

  /**
   * Función de clase para obtener el nombre de usuario.
   * @returns {*}
   */
  getUsername() {
    return this.username
  }

  /**
   * Función de clase para obtener el array de platos.
   * @returns {Array}
   */
  getDishes() {
    return this.dishes
  }

  /**
   * Función que setea el ID.
   * @param {*} _id 
   */
  setID(_id) {
    this.id = _id
  }

  /**
   * Función que setea el nombre de usuario.
   * @param {*} _username 
   */
  setUsename(_username) {
    this.username = _username
  }

  /**
   * Función que introduce la lista de platos en la orden.
   * @param {Array} _cart 
   */
  setCart(_cart) {
    this.cart = _cart
  }
}