const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({ session: expressSession });
var mongoose = require('mongoose');

app.use(express.static(path.resolve(__dirname, '../public')));

mongoose.connect('mongodb://localhost:32768/auth', { useNewUrlParser: true });
var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
  console.log('Connected');
});
app.use(expressSession({
  secret: 'SECRET',
  cookie: { maxAge: 2628000000 },
  resave: true,
  saveUninitialized: true,
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  })
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', require('./routes/user.route'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
