module.exports = function (name, defaultMessage, status) {

  require('util').inherits(constructor, Error);

  return constructor;

  function constructor (message) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.name = name;
    this.message = message || defaultMessage;
    this.status = 400;
  }

};