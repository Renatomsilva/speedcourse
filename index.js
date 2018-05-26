const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(session({
  secret: 'sppedtest',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: true,
  },
}));

app.use(express.static('app'));


app.listen(process.env.PORT || 4000, () => {
  console.log(`App running at env: ${process.env.NODE_ENV} and port: ${process.env.PORT || 4000}`);
});

