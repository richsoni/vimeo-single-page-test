const SEEDS = require("./seeds")
class InfoStore {
  constructor() {
    this.__data = new Immutable.Map(SEEDS.STAFF_INFO)
  }
  toJS(){ return this.__data.toJS() }
}

module.exports = new InfoStore()
