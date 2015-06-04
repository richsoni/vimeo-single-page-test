class VideoStore {
  constructor() {
    this.__data = new Immutable.List()
  }
  list(){ return this.__data.toArray() }
  concat(items){
    this.__data = this.__data.concat(items)
  }
}

module.exports = new VideoStore()
