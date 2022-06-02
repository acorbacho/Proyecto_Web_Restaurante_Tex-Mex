/**
 * Clase Controller.
 * Se encarga de enlazar los datos con la interfaz de usuario.
 */
class Controller {
  /**
   * 
   * @param {*} model Objeto "Model".
   * @param {*} view Objeto "View".
   */
  constructor(model, view) {
    //Se carga el modelo en el atributo.
    this.model = model
    //Se carga la vista en el atributo.
    this.view = view
    //
    this.view.showDishes(this.model.dishes)
    //
    this.view.newCartItem()
  }
  /**
   * Función que comunica con el modelo para que recoja los platos
   * de la base de datos y rellene el array localizado en el
   * constructor del modelo.
   * @returns {Array}
   */
  fillDishes() {
    this.model.setDishes()
    return this.model.dishes
  }

  handlerNewCartItem() {
    this.model.getDishes()
  }
}
//Inicio de la aplicación.
const app = new Controller(new Model, new View)