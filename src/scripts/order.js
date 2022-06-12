/**
 * Clase que crea los pedidos.
 */
class Order {
  /**
   * Constructor de la clase.
   * @param {*} id ID del pedido.
   * @param {*} username Nombre de usuario que realiza el pedido.
   * @param {number} total Precio total del pedido.
   */
  constructor(id, username, total) {
    //Atributo "id".
    this.id = id
    //Atributo "username".
    this.username = username
    //Atributo del precio total.
    this.total = total
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
   * Función de clase para obtener el total.
   * @returns {*}
   */
  getTotal() {
    return this.total
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
  setUsername(_username) {
    this.username = _username
  }
}