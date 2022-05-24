class Dish {
  constructor(propierties) {
    this.name = propierties.name
    this.amount = propierties.amount
    this.ingredient_0 = propierties.ingredient_0
    this.ingredient_1 = propierties.ingredient_1
    this.ingredient_2 = propierties.ingredient_2
    this.ingredient_3 = propierties.ingredient_3
    this.ingredient_4 = propierties.ingredient_4
    this.ingredient_5 = propierties.ingredient_5
  }

  getName() {
    return this.name
  }

  getSize() {
    return this.size
  }

  getAmount() {
    return this.amount
  }

  getIngredients() {
    return [this.ingredient_0, this.ingredient_1, this.ingredient_2, this.ingredient_3, this.ingredient_4]
  }

  setName(_name) {
    this.name = _name
  }

  setSize(_size) {
    this.size = _size
  }

  setAmount(_amount) {
    this.amount = _amount
  }

  setIngredients(_ingredients) {
    this.ingredient_0 = _ingredients[0]
    this.ingredient_1 = _ingredients[1]
    this.ingredient_2 = _ingredients[2]
    this.ingredient_3 = _ingredients[3]
    this.ingredient_4 = _ingredients[4]
  }
}
