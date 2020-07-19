const path =  require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs =  require('express-handlebars');
const passport =  require('passport');
const session = require('express-session');
const connectDB =  require("./config/db");

//@ Load Config 
dotenv.config({path: './config/config.env'});

// @ Passport config 

require('./config/passport')(passport)
connectDB();
const app = express();

// @ Use of morgan for devlopment login.

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
 // @ using handlebars middlewares 
 app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
 app.set('view engine', '.hbs');

 // @ Express-Session middleware config 

 app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
   
  }))
  
 // @ Passport middlewares

 app.use(passport.initialize());
 app.use(passport.session());

 // @ Config Staic folder
 app.use(express.static(path.join(__dirname, 'public')));

 // @ using all the routes 
 
 app.use('/', require('./routes/index'));
 app.use('/auth', require('./routes/auth'));
 
// @ App PORT 
const PORT = process.env.PORT || 5000;

// @ App Listen 
app.listen(PORT, console.log(` The Server is up and running ${process.env.NODE_ENV}  mode on port  ${PORT}`))    