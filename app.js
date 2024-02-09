const express = require('express');
const app = express();
const port = 3001;
const connectDB = require('./db/connectDB');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

//bodyparse
app.use(bodyParser.urlencoded({ extended: false }));

//session message
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
}));

//flash message
app.use(flash());

//file upload
app.use(fileUpload({ useTempFiles: true }));

// cookies
app.use(cookieParser());

// require web file
const web = require('./routes/web.js');

// load routing
app.use('/', web);

// Set view engine
app.set('view engine', 'ejs');

// link public folder
app.use(express.static('public'));

// db connection
connectDB();

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});