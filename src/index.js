const path = require('path');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
const route = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//template engine
app.engine('hbs', handlebars.engine({ defaultLayout: 'main', extname: '.hbs'}));
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'hbs');

//routes init
route(app);

app.listen(port,()=>console.log(`listening on port`+port));