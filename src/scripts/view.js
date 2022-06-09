/**
 * Clase que crea la vista.
 */
class View {
  /**
   * Constructor de clase.
   */
  constructor() {
    //Añadir prototipo "listenFor".
    Element.prototype.listenFor = function (name, callback) {
      //Almacenar la función callback en el objeto del elemento.
      //Nos servirá para parar el eventListener.
      this.listenerCallback = callback;
      //Añadir el eventListener.
      this.addEventListener(name, callback);
      //Añadir el eventListener.
    }

    //Añadir prototipo "stopListen".
    Element.prototype.stopListen = function (name) {
      //Recoger la función callback y parar el eventListener.
      this.removeEventListener(name, this.listenerCallback);
    }

    //DOM listado de platos del panel de usuario.
    this.user_dishes_section = document.querySelector('.dishes')

    //DOM carrito del panel de usuario.
    this.user_cart_section = document.querySelector('.cart__content')
    this.user_cart_button = document.querySelector('.btn--cart')
    this.user_cart_euros = document.querySelector('.euros')

    //DOM listado de pedidos del panel de admin.
    this.admin_orders_section = document.querySelector('.orders')

    //DOM administración de ingredientes del panel de admin.
    this.admin_ingredients_section = document.querySelector('.ingredients')
  }

  /**
   * Función que itera el array de platos.
   * @param {Array} dishes Array de platos del modelo.
   */
  showDishes(dishes) {
    dishes.forEach(this.updateDishes)
    //Asignación de atributos a los elmentos creados.
    let aux_user_dishes_img = document.getElementsByClassName('dishes__img')
    //Le asignamos una imágen a cada plato en el HTML.
    aux_user_dishes_img[0].setAttribute('src', '../assets/img/user_panel/fajita.png')
    aux_user_dishes_img[1].setAttribute('src', '../assets/img/user_panel/nachos.png')
    aux_user_dishes_img[2].setAttribute('src', '../assets/img/user_panel/taco.png')
  }

  /**
   * Función que se complementa con "showDishes", pasandosela como parámetro
   * para que muestre los platos en la web.
   * @param {*} value Valor que acaba de leerse en la iteración del "forEach".
   */
  updateDishes = (value) => {
    /**
     * Guarda el nombre del plato de la lista de platos.
     * @type {*}
     */
    const dish_name = value.dish_name
    /**
     * Guarda el precio del plato de la lista de platos.
     * @type {number}
     */
    const dish_price = value.price
    /**
     * Guarda el nombre (formateado) del plato de la lista de platos.
     * @type {*}
     */
    const dish_name2 = dish_name.charAt(0).toUpperCase() + dish_name.slice(1)
    //Creación de elementos.
    this.user_dishes_container = document.createElement('div')
    //Creación de elementos.
    this.user_dishes_img = document.createElement('img')
    //Creación de elementos.
    this.user_dishes_name = document.createElement('p')
    //Creación de elementos.
    this.user_dishes_price = document.createElement('p')
    //Creación de elementos.
    this.user_dishes_button = document.createElement('button')
    //Asignación de atributos a los elmentos creados.
    this.user_dishes_container.setAttribute('class', 'row')
    //Asignación de atributos a los elmentos creados.
    this.user_dishes_img.setAttribute('class', 'dishes__img')
    //Asignación de atributos a los elmentos creados.
    this.user_dishes_name.setAttribute('class', 'row__txt dishes__name')
    //Asignación de atributos a los elmentos creados.
    this.user_dishes_price.setAttribute('class', 'row__txt dishes__price')
    //Asignación de atributos a los elmentos creados.
    this.user_dishes_button.setAttribute('class', 'btn btn--dishes')
    //Se rellenan los elementos.
    this.user_dishes_button.innerHTML = 'Añadir al carrito'
    //Se rellenan los elementos. Nombre formateado.
    this.user_dishes_name.innerHTML = dish_name2
    //Se rellenan los elementos. Precio formateado.
    this.user_dishes_price.innerHTML = parseFloat(dish_price).toFixed(2) + ' €'
    //Se colocan los elemntos en el "document".
    this.user_dishes_section.append(this.user_dishes_container)
    //Se colocan los elemntos en el "document".
    this.user_dishes_container.append(this.user_dishes_img, this.user_dishes_name, this.user_dishes_price, this.user_dishes_button)
  }

  /**
   * Función que activa el evento de añadadir un item a la cesta tanto en el array del modelo,
   * como gráficamente en la vista. Además actualiza los eventos de eliminación de elementos
   * del carrito.
   * @param {*} handler Función con la que se trae el plato con el que completar el HTML.
   * @param {*} cart Le pasa el carrito para evaluar los elementos.
   */
  newCartItem(handler, cart) {
    /**
     * Constante que guarda todos los elementos botón del listado de platos.
     * @type {Array}
     */
    const aux_button_classes = document.getElementsByClassName('btn--dishes')
    for (let i = 0; i < aux_button_classes.length; i++) {
      aux_button_classes[i].addEventListener('click', (evt) => {
        //Evalúa si el carrito está lleno.
        if (cart.length < 10) {
          /**
           * Variable auxiliar que guarda el plato que coincide ordinalmente con
           * los botones asociados a los plato de la lista del HTML.
           * @type {Object}
           */
          let aux_dish = handler(i)
          //Se crean los elementos.
          this.user_cart_container = document.createElement('div')
          //Se crean los elementos.
          this.user_cart_name = document.createElement('div')
          //Se crean los elementos.
          this.user_cart_price = document.createElement('div')
          //Se crean los elementos.
          this.user_cart_remove = document.createElement('span')
          //Se establecen los atributos de los elementos.
          this.user_cart_container.setAttribute('class', 'cart__item')
          //Se establecen los atributos de los elementos.
          this.user_cart_name.setAttribute('class', 'cart__item__name')
          //Se establecen los atributos de los elementos.
          this.user_cart_price.setAttribute('class', 'cart__item__price')
          //Se establecen los atributos de los elementos.
          this.user_cart_remove.setAttribute('class', 'cart__item__remove')
          //Se rellenan los contenedores. 
          this.user_cart_remove.textContent = 'x'
          //Se rellenan los contenedores. Nombre del plato formateado.
          this.user_cart_name.textContent = aux_dish.dish_name.charAt(0).toUpperCase() + aux_dish.dish_name.slice(1);
          //Se rellenan los contenedores. Precio del plato formateado.
          this.user_cart_price.textContent = parseFloat(aux_dish.price).toFixed(2) + ' €'
          //Se incrustan los elementos en el "document".
          this.user_cart_section.append(this.user_cart_container)
          //Se incrustan los elementos en el "document".
          this.user_cart_container.append(this.user_cart_name, this.user_cart_price, this.user_cart_remove)
        } else {
          alert('El número máximo de items en el carrito son 10')
        }
      })
    }
  }

  /**
   * Función que activa los eventos de eliminación de elementos del carrito.
   * @param {*} handler Función que elimina un elemento del carrito del model.
   */
  removeCartItem(handler, cart) {
    /**
     * Guarda los elementos "x" del carrito.
     * @type {*}
     */
    let aux_remove_elements = document.getElementsByClassName('cart__item__remove')
    /**
     * Variable que va guardando el total del carrito.
     * @type {number}
     */
    let aux_total = 0

    //Cada vez que se ejecuta esta función se iteran los precios del carrito.
    for (let i = 0; i < cart.length; i++) {
      aux_total = aux_total + parseFloat(cart[i].price)
    }
    this.user_cart_euros.textContent = aux_total.toFixed(2) + ' €'

    /** Función principal que ejecuta el evento, donde se elimina un elemento del HTML,
     * y además, elimina ese elemento del array carrito.
     */
    function eventfunction(n, evt) {
      evt.target.parentNode.remove()
      handler(n)
    }

    //Bucle que itera los elementos del array"aux_remove_elements" para detruir los anteriores
    //eventos relacionados (menos el evento del último elemento eliminado del carrito, que sería
    //eliminado en el siguiente ciclo.)
    for (let i = 0; i < aux_remove_elements.length; i++) {
      aux_remove_elements[i].stopListen('click')
    }

    //Bucle que itera los elementos del array "aux_Remove_elements" para reconstruir los eventos.
    for (let i = 0; i < aux_remove_elements.length; i++) {
      aux_remove_elements[i].listenFor('click', function (evt) {
        eventfunction(i, evt)
      })
    }
  }

  /**
   * Función que recibe del controlador la función "removeCartItem" y que activa un
   * evento que se activa cuando se hace click en algún punto del "main". El objetivo
   * es refrescar los elementos del carrito cuando se añaden o se quitan items.
   * @param {*} handler 
   */
  refreshCartListener(handler) {
    document.querySelector('.main').addEventListener('click', handler)
  }

  /**
   * Función que activa un evento que crea una orden cuando se finaliza el pedido
   * pulsando el botón de finalizar pedido en el carrito, luego te redirecciona.
   * @param {*} handler Función que guarda el pedido en la base de datos.
   * @param {*} cart Carrito.
   */
  createOrder(handler, cart) {
    this.user_cart_button.addEventListener('click', () => {
      if (cart.length >= 1) {
        alert(handler() + '\nSu pedido estará listo para recoger en un plazo de 15 a 30 minutos.\nMuchas gracias.')
        window.location.replace('../index.html')
      } else {
        alert('No puedes hacer un pedido vacío.')
      }
    })
  }

  /**
   * Función que carga los pedidos en la vista.
   * @param {Array} orders 
   */
  showOrders(orders) {
    for (let i = 0; i < orders.length; i++) {
      /**
       * Guarda el id del pedido.
       * @type {*}
       */
      const order_id = orders[i].getID()
      /**
       * Guarda el nombre de usuario que hizo el pedido.
       * @type {*}
       */
      const order_username = orders[i].getUsername()
      /**
       * Guarda el total del pedido.
       * @type {number}
       */
      const order_total = orders[i].getTotal()
      //Creación de elementos.
      this.admin_orders_container = document.createElement('div')
      //Creación de elementos.
      this.admin_orders_id = document.createElement('p')
      //Creación de elementos.
      this.admin_orders_username = document.createElement('p')
      //Creación de elementos.
      this.admin_orders_total = document.createElement('p')
      //Creación de elementos.
      this.admin_orders_button = document.createElement('button')
      //Asignación de atributos a los elmentos creados.
      this.admin_orders_container.setAttribute('class', 'row orders__row')
      //Asignación de atributos a los elmentos creados.
      this.admin_orders_id.setAttribute('class', 'row__txt orders__id')
      //Asignación de atributos a los elmentos creados.
      this.admin_orders_username.setAttribute('class', 'row__txt orders__username')
      //Asignación de atributos a los elmentos creados.
      this.admin_orders_total.setAttribute('class', 'row__txt orders__total')
      //Asignación de atributos a los elmentos creados.
      this.admin_orders_button.setAttribute('class', 'btn btn--orders')
      //Se rellenan los elementos.
      this.admin_orders_button.innerHTML = 'Aceptar pedido'
      //Se rellenan los elementos. Nombre formateado.
      this.admin_orders_id.innerHTML = order_id
      //Se rellenan los elementos. Precio formateado.
      this.admin_orders_username.innerHTML = order_username
      //Se rellenan los elementos. Precio formateado.
      this.admin_orders_total.innerHTML = parseFloat(order_total).toFixed(2) + ' €'
      //Se colocan los elemntos en el "document".
      this.admin_orders_section.append(this.admin_orders_container)
      //Se colocan los elemntos en el "document".
      this.admin_orders_container.append(this.admin_orders_id, this.admin_orders_username, this.admin_orders_total, this.admin_orders_button)
    }
  }

  /**
   * Activa los eventos que completan un pedido eliminándolo de los pedidos pendientes
   * cuando se pulsa el botón de aceptar pedido.
   * @param {*} handler Función del controller, que elimina los pedidos y resta los ingredientes en el modelo.
   */
  endOrder(handler) {
    /**
     * Almacena los elementos botón de la lista de pedidos.
     * @type {*}
     */
    let aux_buttons = document.getElementsByClassName('btn--orders')
    /**
     * Almacena los elementos ID de cada pedido de la lista de pedidos.
     * @type {*}
     */
    let aux_id = document.getElementsByClassName('orders__id')
    //Se crean los eventos. Sale una notificación y luego se recarga la página, cuando se acepta un pedido.
    for (let i = 0; i < aux_buttons.length; i++) {
      aux_buttons[i].addEventListener('click', function (evt) {
        alert(handler(aux_id[i].textContent, i))
        evt.target.parentNode.remove()
        window.location.replace('admin_panel.php')
      })
    }
  }

  /**
   * Función que itera un array de ingredientes y los muestra.
   * @param {Array} ingredients Array de ingredientes.
   */
  showIngredients = (ingredients) => {
    ingredients.forEach(this.updateIngredients)
  }

  /**
   * Función que se complementa con "showIngredients", que es pasada por parámetro al
   * "forEach", y es la que ejecuta todo el proceso de escritura de los ingredientes en la web.
   * @param {*} value 
   */
  updateIngredients = (value) => {
    /**
     * Guarda el nombre del plato de la lista de platos.
     * @type {*}
     */

    const ingredient_name = value.ingredient_name
    /**
     * Guarda el precio del plato de la lista de platos.
     * @type {number}
     */
    const ingredient_stock = value.ingredient_stock
    //Creación de elementos.
    this.admin_ingredients_container = document.createElement('div')
    //Creación de elementos.
    this.admin_ingredients_name = document.createElement('p')
    //Creación de elementos.
    this.admin_ingredients_amount = document.createElement('p')
    //Creación de elementos.
    this.admin_ingredients_input = document.createElement('input')
    //Creación de elementos.
    this.admin_ingredients_button = document.createElement('button')
    //Asignación de atributos a los elmentos creados.
    this.admin_ingredients_container.setAttribute('class', 'row ingredients__row')
    //Asignación de atributos a los elmentos creados.
    this.admin_ingredients_name.setAttribute('class', 'row__txt ingredients__name')
    //Asignación de atributos a los elmentos creados.
    this.admin_ingredients_amount.setAttribute('class', 'row__txt ingredients__amount')
    //Asignación de atributos a los elmentos creados.
    this.admin_ingredients_input.setAttribute('type', 'text')
    //Asignación de atributos a los elmentos creados.
    this.admin_ingredients_input.setAttribute('name', 'amount')
    //Asignación de atributos a los elmentos creados.
    this.admin_ingredients_input.setAttribute('class', 'row__txt ingredients__amount__add')
    //Asignación de atributos a los elmentos creados.
    this.admin_ingredients_button.setAttribute('class', 'btn btn--ingredients')
    //Se rellenan los elementos.
    this.admin_ingredients_button.innerHTML = 'Añadir stock'
    //Se rellenan los elementos. Nombre formateado.
    this.admin_ingredients_name.innerHTML = ingredient_name
    //Se rellenan los elementos. Precio formateado.
    this.admin_ingredients_amount.innerHTML = ingredient_stock
    //Se rellenan los elementos. Precio formateado.
    this.admin_ingredients_section.append(this.admin_ingredients_container)
    //Se colocan los elemntos en el "document".
    this.admin_ingredients_container.append(this.admin_ingredients_name, this.admin_ingredients_amount, this.admin_ingredients_input, this.admin_ingredients_button)
  }

  /**
   * Función que activa los eventos de addición de stock a los ingredientes.
   * @param {*} handler Función del controller que es pasada por parámetro para que se realice la actualización en db desde el modelo.
   */
  addIngredientAmount(handler) {
    /**
     * Función que almacena los elementos botón, del panel de ingredientes.
     * @type {*}
     */
    let aux_buttons = document.getElementsByClassName('btn--ingredients')
    /**
     * Función que almacena los elementos de input para introducir la cantidad de ingrediente, del panel de ingredientes.
     * @type {*}
     */
    let aux_input = document.getElementsByClassName('ingredients__amount__add')
    /**
     * Función que almacena los elementos que guardan el nombre del ingrediente, del panel de ingredientes.
     * @type {*}
     */
    let aux_name = document.getElementsByClassName('ingredients__name')
    //Se crean los eventos y se lanza una alerta de confirmación, y luego se recarga la página.
    for (let i = 0; i < aux_buttons.length; i++) {
      aux_buttons[i].addEventListener('click', function (evt) {
        alert(handler(aux_name[i].textContent, parseInt(aux_input[i].value, 10)))
        window.location.replace('admin_panel.php')
      })
    }
  }

  /**
   * Función que recarga la página en caso de no haber actividad
   * aceptando pedidos o introduciendo ingredientes al stock durante
   * un intervalo de tiempo determinado.
   */
  reloadAdminPanel() {
    /**
     * Función que se le pasa al intervalo para que la ejecute cada cierto tiempo dado.
     */
    function reloading() {
      window.location.replace('admin_panel.php')
    }
    /**
     * Variable que guarda el intervalo.
     * @type {*}
     */
    let interval = setInterval(reloading, 30000)
    //Los siguientes eventos se lanzan cuando hay actividad en la zona "main" de la página.
    document.querySelector('.main').addEventListener('click', () => {
      //Primero se destruye el intervalo anterior.
      clearInterval(interval)
      //Luego se vuelve a crear el intervalo y se almacena.
      interval = setInterval(reloading, 30000)
    })
    document.querySelector('.main').addEventListener('input', () => {
      //Primero se destruye el intervalo anterior.
      clearInterval(interval)
      //Luego se vuelve a crear el intervalo y se almacena.
      interval = setInterval(reloading, 30000)
    })
  }
}