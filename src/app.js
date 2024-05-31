const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

// Middleware to expose the static files 
app.use(express.static(path.join(__dirname, 'views'),
{extensions: ['html']}));
app.use(express.static(path.join(__dirname, 'styles')));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));
app.use('/scripts', express.static(path.join(__dirname, '../public/scripts')));
app.use('/img', express.static(path.join(__dirname, '../public/img'),
{extensions: ['jpg', 'png']}));
app.use('/fonts', express.static(path.join(__dirname, '../public/fonts')));

app.use('/repositories', express.static(path.join(__dirname, '../repositories'))),
app.use('/utils', express.static(path.join(__dirname, './utils'),
{ extensions: ['js'] }));


// Middleware to parse request body
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Configure session middleware
app.use(session({
     secret: '5da5c3ac5fdd27db1cce451073c9b573',
     resave: false,
     saveUninitialized: true,
     cookie: { secure: false }
}))

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware to set loggedIn variable for all views
app.use((req, res, next) => {
     res.locals.loggedIn = req.session.loggedIn || false;
     next();
   });


// Routes
app.get('/', (req, res) => {
     res.render('index')
})

app.get('/archives', (req, res) => {
     res.sendFile('/archives')
});

const authRouters = require('./routes/authRoute.js');
app.use('/auth', authRouters);

app.get('/contact', (req, res) => {
     res.sendFile('/contact')
});

// Data Endpoints

app.all('*', (req, res) => {
     res.status(404).sendFile(path.resolve(__dirname, 'views', '404.html'))
});

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port} ...`);
});