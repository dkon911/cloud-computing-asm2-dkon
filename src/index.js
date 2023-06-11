const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//template engine
app.engine('hbs', handlebars.engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
})  

app.use;
app.listen(port,()=>console.log(`listening on port`+port));