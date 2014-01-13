var util = require('util');

module.exports = function (name, defaultMessage, status) {

  util.inherits(Constructor, Error);

  return Constructor;

  function Constructor (message) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.name = name;
    this.message = message || defaultMessage;
    this.status = status;
  }

};