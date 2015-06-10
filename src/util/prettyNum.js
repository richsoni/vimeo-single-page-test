module.exports = (number) => {
  number = number || 0
  var _num = number.toString()
  if(_num.length > 3 && _num.length < 7){
    return `${_num.substring(0,_num.length - 3)}K`
  }
  if(_num.length > 6 && _num.length < 10){
    return `${_num.substring(0,_num.length - 6)}M`
  }
  if(_num.length > 9 && _num.length < 13){
    return `${_num.substring(0,_num.length - 9)}B`
  }
  return _num;
}
