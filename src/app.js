const express = require('express');
const app = express();
const port = 8000;
const path = require('path');


// Middleware to expose the static files 
app.use(express.static(path.join(__dirname, 'views'),
{extensions: ['html']}));
app.use(express.static(path.join(__dirname, 'styles')));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));
app.use('/scripts', express.static(path.join(__dirname, '../public/scripts')));
app.use('/img', express.static(path.join(__dirname, '../public/img'),
{extensions: ['jpg', 'png']}));
app.use('/fonts', express.static(path.join(__dirname, '../public/fonts')));

// Routes


app.get('/', (req, res) => {
     res.sendFile('/index')
})

app.get('/archives', (req, res) => {
     res.sendFile('/archives')
});

const authRouters = require('./modules/authRouter.js');
app.use('/auth', authRouters);
// Data Endpoints


// Middleware


app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port} ...`);
});