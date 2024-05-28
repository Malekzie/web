const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

// Middleware to expose the static files 
app.use(express.static(path.join(__dirname, 'views'),
{extensions: ['html']}));
app.use(express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, '../public/scripts')));
app.use('/img', express.static(path.join(__dirname, '../public/img')));
app.use('/fonts', express.static(path.join(__dirname, '../public/fonts')));


app.get('/', (req, res) => {
     res.sendFile('/index')
})

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port} ...`);
});