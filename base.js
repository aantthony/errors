var util = require('util');

module.exports = function (name, defaultMessage, status) {

  util.inherits(Constructor, Error);

  return Constructor;

  function Constructor (message, code) {
    Error.call(this, message || defaultMessage);
    Error.captureStackTrace(this, arguments.callee);
    this.name = name;
    this.status = status;
    this.expose = true;
    if (code !== undefined) this.code = code;
  }

};
