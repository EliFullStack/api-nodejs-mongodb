var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const authMiddleware = require('./lib/authMiddleware');

require('./lib/connectMongoose');
require('./routes/apiv1/anuncios');
require('./routes/apiv1/tags');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Api routes
 */
app.use('/apiv1/anuncios', authMiddleware, require('./routes/apiv1/anuncios'));
app.use('/apiv1/tags', authMiddleware, require('./routes/apiv1/tags'));


/**
 * Web site routes
 */

app.use('/', (req, res, next) => {
  console.log('recibe una petición');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  //if it is a request to the api, reply with JSON
  if(req.originalUrl.startsWith('/apiv1/')) {
    res.json({ error: err.message});
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

module.exports = app;
