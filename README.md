errors
======

Error constructors for common http error types

Usage:

```javascript

var app = express();

var BadRequestError = require('errors/badrequest');
var CustomError = require('errors')('TeapotError', 'I am a teapot', 418);

app.get('/test', function (req, res, next) {
  next(new BadRequestError('Invalid!'));
});

```