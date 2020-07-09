const path =  require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs =  require('express-handlebars');
const connectDB =  require("./config/db");

//@ Load Config 
dotenv.config({path: './config/config.env'});
connectDB();
const app = express();

// @ Use of morgan for devlopment login.

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
 // @ using handlebars middlewares 
 app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
 app.set('view engine', '.hbs');

 // @ Config Staic folder
 app.use(express.static(path.join(__dirname, 'public')));

 // @ using all the routes 
 
 app.use('/', require('./routes/index'));
 
// @ App PORT 
const PORT = process.env.PORT || 5000;

// @ App Listen 
app.listen(PORT, console.log(` The Server is up and running ${process.env.NODE_ENV}  mode on port  ${PORT}`))    