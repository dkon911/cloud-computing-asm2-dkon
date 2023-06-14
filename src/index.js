const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');

const route = require('./routes/index');
const db = require('./config/db');

//connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template engine handlebars
app.engine('hbs', handlebars.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('view engine', 'hbs');

//routes init
route(app);
app.listen(port, () => console.log(`App listening at port` + port));