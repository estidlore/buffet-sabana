const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const express = require('express');
const httpErrors = require('http-errors');
const morgan = require('morgan');
const path = require('path');

const app = express();

const {PORT, ROUTES} = process.env;

const router = (p, r) => {
  app.use(p, require(`./routes/${r}`));
};

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes
router('/', 'index');

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in dev
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // Render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(PORT, () => {
  console.log(`Food API listening on port ${PORT}`);
});
