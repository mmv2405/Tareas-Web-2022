const express = require('express');
const app = express();
const path = require('path');
const newsRoute = require('./routes/news');



app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/', newsRoute);

const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.set('views','./views')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log('app is running in port 3000');
});
