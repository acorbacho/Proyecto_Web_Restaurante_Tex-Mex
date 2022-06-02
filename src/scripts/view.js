/**
 * Clase que crea la vista.
 */
class View {
  /**
   * Constructor de clase.
   */
  constructor() {
    //DOM listado de platos del panel de usuario.
    this.user_dishes_container = document.createElement('div')
    this.user_dishes_container.setAttribute('class', 'row')
    this.user_dishes_img = document.createElement('img')
    this.user_dishes_img.setAttribute('src', 'https://hsaa.hsobjects.com/h/menuitems/images/009/125/830/6d3bd503998e84b6f51f053e2129b6b4-size1200.png')
    this.user_dishes_img.setAttribute('class', 'dishes__img')
    this.user_dishes_name = document.createElement('p')
    this.user_dishes_name.setAttribute('class', 'row__txt')
    this.user_dishes_price = document.createElement('p')
    this.user_dishes_price.setAttribute('class', 'row__txt')
    this.user_dishes_button = document.createElement('button')
    this.user_dishes_button.setAttribute('class', 'btn btn--dishes')
    this.user_dishes_button.textContent = 'Añadir al carrito'

    //DOM carrito del panel de usuario.
    this.user_cart_container = document.createElement('div')
    this.user_cart_container.setAttribute('class', 'cart__item')
    this.user_cart_name = document.createElement('div')
    this.user_cart_name.setAttribute('class', 'cart__item__name')
    this.user_cart_price = document.createElement('div')
    this.user_cart_price.setAttribute('class', 'cart__item__price')
    this.user_cart_remove = document.createElement('span')
    this.user_cart_remove.setAttribute('class', 'cart__item__remove')
    this.user_cart_remove.textContent = 'x'
    this.user_cart_total = document.createElement('p')
    this.user_cart_total.setAttribute('class', 'euros')

    //DOM listado de pedidos del panel de admin.
    this.admin_orders_container = document.createElement('div')
    this.admin_orders_container.setAttribute('class', 'row')
    this.admin_orders_id = document.createElement('p')
    this.admin_orders_id.setAttribute('class', 'row__txt order__id')
    this.admin_orders_username = document.createElement('p')
    this.admin_orders_username.setAttribute('class', 'row__txt order__username')
    this.admin_orders_total = document.createElement('p')
    this.admin_orders_total.setAttribute('class', 'row__txt order__total')
    this.admin_orders_button = document.createElement('button')
    this.admin_orders_button.textContent = 'Aceptar pedido'
    this.admin_orders_button.setAttribute('class', 'btn btn--orders')

    //DOM administración de ingredientes del panel de admin.
    this.admin_ingredients_container = document.createElement('div')
    this.admin_ingredients_container.setAttribute('class', 'row')
    this.admin_ingredients_name = document.createElement('p')
    this.admin_ingredients_name.setAttribute('class', 'row__txt ingredients__name')
    this.admin_ingredients_amount = document.createElement('p')
    this.admin_ingredients_amount.setAttribute('class', 'row__txt ingredients__amamount')
    this.admin_ingredients_input = document.createElement('input')
    this.admin_ingredients_input.setAttribute('type', 'text')
    this.admin_ingredients_input.setAttribute('name', 'amount')
    this.admin_ingredients_input.setAttribute('class', 'row__txt ingredients__amount__add')
    this.admin_ingredients_button = document.createElement('button')
    this.admin_ingredients_button.textContent = 'Añadir'
    this.admin_ingredients_button.setAttribute('class', 'btn btn--ingredients')
  }
  /**
   * Función para crear elementos en el DOM.
   * @param {*} tag Etiqueta que se quiere crear.
   * @param {*} className Clase que identifica el elemento.
   * @returns {*}
   */
  createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }
  /**
   * Función para obtener elementos del DOM.
   * @param {*} selector Selector que identifica el elemento.
   * @returns {*}
   */
  getElement(selector) {
    const element = document.querySelector(selector)

    return element
  }

  showDishes(_dishes) {

  }

  newCartItem() {

  }

  removeCartItem() {

  }

  createOrder() {

  }

  endOrder() {

  }

  showOrders() {

  }

  showIngredients() {

  }

  addIngredientAmount() {

  }

}