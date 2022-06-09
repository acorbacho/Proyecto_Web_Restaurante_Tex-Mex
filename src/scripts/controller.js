/**
 * Clase Controller.
 * Se encarga de enlazar los datos con la interfaz de usuario.
 */
class Controller {
  /**
   * Constructor de clase.
   * @param {*} model Objeto "Model".
   * @param {*} view Objeto "View".
   */
  constructor(model, view) {
    //Se carga el modelo en el atributo.
    this.model = model
    //Se carga la vista en el atributo.
    this.view = view
    if (this.model.whoAmI() != 'admin') {
      //FUNCIONES DEL PANEL DE USUARIO.

      /**Función de la vista, que muestra los platos en el menú.
      * Se le pasa la función que rellena los platos desde la
      * base de datos en el array del modelo.
      */
      this.view.showDishes(this.fillDishes())
      /**
       * Función ejecutada en la vista que añade una fila al carrito en la propia vista.
       */
      this.view.newCartItem(this.handlerNewCartItem, this.cartItems())
      /**
       * Función ejecutada en la vista que refresca los listener cuando hay un cambio en el carrito.
       */
      this.view.refreshCartListener(this.handlerRefreshCartListener)
      /**
       * Función ejecutada en la vista que crea el listener para la creación de pedidos.
       * Se le pasa por parámetro el handler que envía la información en el modelo hacia la
       * base de datos, y también se le pasa el carrito para evaluar que tiene contenido y
       * no se ejecuta una petición vacía.
       */
      this.view.createOrder(this.handlerCreateOrder, this.cartItems())
    } else {
      //FUNCIONES DEL PANEL DE ADMINISTRADOR.

      //Ejecución de la función de la vista que muestra los pedidos pendientes.
      this.view.showOrders(this.showOrders())
      //Ejecución de la función de la vista que actualiza la página cada
      //60 segundos si no está habiendo actividad.
      this.view.reloadAdminPanel()
      //Ejecución de la función de la vista que quita un pedido pendiente.
      this.view.endOrder(this.handlerEndOrder)
      //Ejecución de la función de la vista que muestra los ingredientes existentes.
      this.view.showIngredients(this.showIngredients())
      //Ejecución de la función de la vista que maneja la introducción de stock de ingredientes.
      this.view.addIngredientAmount(this.handlerAddIngredientAmount)
    }
  }
  /**
   * Función que comunica con el modelo para que recoja los platos
   * de la base de datos, y rellene el array localizado en el
   * constructor del modelo, retornando el array de platos.
   * Esta función se le pasa ejecutada a la función de la vista, 
   * encargada de mostrar los platos.
   * @returns {Array} Platos.
   */
  fillDishes = () => {
    this.model.dishes = this.model.loadDishes()
    return this.model.dishes
  }

  /**
   * Función que añade un item al carro del modelo, pasándole un índice como parámetro
   * desde la vista. Devuelve el item.
   * @param {*} item_index Índice del ítem a insertar.
   * @returns {object} Objeto del carrito.
   */
  handlerNewCartItem = (item_index) => {
    return this.model.setItem(item_index)
  }

  /**
   * Función que quita un item del carro del modelo, pasándole un índice como parámetro
   * desde la vista.
   * @param {*} item_index Índice del ítem a remover.
   */
  handlerRemoveCartItem = (item_index) => {
    this.model.removeItem(item_index)
  }

  /**
   * Handler que se utiliza para enviarle a la función de refresco de eventos en la vista,
   * en su interior incluye la llamada a la función de la vista que llama a los eventos de
   * eliminación de elementos del carrito, que le es pasada por parámentro la función que 
   * elimina elementos del array "cart" del "model". Además se le pasa el carrito.
   */
  handlerRefreshCartListener = () => {
    this.view.removeCartItem(this.handlerRemoveCartItem, this.cartItems())
  }

  /**
   * Devuelve el carrito. Se usa para las funciones de la vista que necesitan el carrito.
   * @returns {Array} Carrito.
   */
  cartItems = () => {
    return this.model.cart
  }

  /**
   * Función que se usa para crear la orden en el modelo, cuando se 
   * finaliza el pedido en la vista, pasando esta función por parámetro,
   * a la función de la vista que maneja el evento de creación de pedidos.
   * @returns {Array} Mensaje de confirmación.
   */
  handlerCreateOrder = () => {
    return this.model.storageOrder()
  }

  /**
   * Función que se le pasa por parámetro (ejecutada), a la función de la vista
   * que muestra los pedidos en curso en el panel de administrador. 
   * Llama a la función del modelo que se encarga de cargar los pedidos de la db.
   * @returns {Array} Array con los objetos "Order".
   */
  showOrders = () => {
    return this.model.loadOrders()
  }

  /**
   * Función handler que se le pasa a la función de la vista, encargada de finalizar un pedido
   * en el panel de administrador. Llama la función del modelo que se encarga de quitar
   * el pedido pendiente y los ingredientes consumidos en la db.
   * @param {*} id 
   * @param {*} index 
   * @returns {*} Mensaje de confirmación.
   */
  handlerEndOrder = (id, index) => {
    return this.model.removeOrder(id, index)
  }

  /**
   * Función que se le pasa por parámetro (ejecutada), a la función de la vista que 
   * carga los ingredientes en el panel de administrador. Aquí ejecuta la función del modelo 
   * que carga los ingredientes desde la db y se guarda el resultado en el array de ingredientes,
   * retornando ese array de ingredientes.
   * @returns {Array} Array de objetos ingrediente.
   */
  showIngredients = () => {
    this.model.ingredients = this.model.loadIngredients()
    return this.model.ingredients
  }

  /**
   * Esta función handler se le pasa por parámentro a la función de la vista que maneja
   * los eventos de añadir stock a los ingredientes desde la vista. Lo que hace es retornar
   * la ejecución del la función del modelo que es capaz de actualizar las cantidades desde
   * la db, pasandole un nombre de ingrediente y su cantidad a añadir, por parámetros.
   * @param {*} name Nombre del ingrediente.
   * @param {*} amount Cantidad a añadir.
   * @returns {*} Mensaje de confirmación.
   */
  handlerAddIngredientAmount = (name, amount) => {
    return this.model.updateIngredients(name, amount)
  }
}

/**
 * Se lanza la aplicación
 * @type {Object}
 */
const app = new Controller(new Model, new View)