class Model {
  constructor() {
    this.dishes = []
  }

  addNewDish(_propierties) {
    this.dishes.push(new Dish(_propierties))
  }

  addDishAmount(_index, _amount) {
    this.dishes[_index].amount = _amount
  }

  getDish(_name) {
    return this.dishes.find(_dish => _dish.name === _name)
  }
}