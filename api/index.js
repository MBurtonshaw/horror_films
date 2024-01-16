const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors());
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const titlesRouter = require('./routes/titles.js');
const genresRouter = require('./routes/genres.js');
const decadesRouter = require('./routes/decades.js');

app.use('/titles', titlesRouter);
app.use('/genres', genresRouter);
app.use('/decades', decadesRouter);

app.get('/', (req, res) => {
    res.send({"message" : "Hi!"});
    //res.cookie('firstCookie', 'geeksforgeeks').send('cookie set');
    //console.log('Cookies: ', req.cookies);
});
 
app.listen(5000, ()=>console.log('server is running'));