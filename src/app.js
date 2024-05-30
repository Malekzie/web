const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');


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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes


app.get('/', (req, res) => {
     res.sendFile('/index')
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