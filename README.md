
[![NPM Version](https://img.shields.io/npm/v/err-http.svg)](https://www.npmjs.com/package/err-http)
[![NPM Downloads](https://img.shields.io/npm/dm/err-http.svg)](https://www.npmjs.com/package/err-http)
[![License](https://img.shields.io/npm/l/err-http.svg)](https://www.npmjs.com/package/err-http)

err-http
======

Error constructors for common HTTP error types.

`npm install err-http`

Usage:

```javascript
var app = express();

var BadRequestError = require('err-http/badrequest');
var CustomError = require('err-http')('TeapotError', 'I am a teapot', 418);

app.get('/test', function (req, res, next) {
  next(new BadRequestError('Invalid!'));
});
```
