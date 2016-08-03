if(typeof String.prototype.startsWith != 'function'){
  String.prototype.startsWith = function(str){
    if(str == null) return false;
    var i = str.length;
    if(this.length < i) return false;
    for(--i; (i >= 0) && (this[i] === str[i]); --i) continue;
    return i < 0;
  }
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

if (typeof String.prototype.splitEqual != 'function') {
  String.prototype.splitEqual = function(actiontype, sep) {
    var res = this.split(sep)
    for(let f of res) {
      if (f === "*" || f == actiontype) {
        return true
      }
    }
    return false
  }
}

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}



