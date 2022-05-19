class Model {
  constructor() {
    this.plates = []
  }

  addNewPlate(_propierties) {
    this.plates.push(new Plate(_propierties))
  }

  addPlateAmount(_index, _amount) {
    this.plates[_index].amount = _amount
  }

  getPlate(_name) {
    return this.plates.find(_plate => _plate.name === _name)
  }
}