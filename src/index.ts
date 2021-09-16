import express from 'express'
import path from 'path'
import exphbs from 'express-handlebars'
import IndexRoutes from './routers'
import BooksRoutes from './routers/books'

//init
const app = express()
import './database'

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

//middlewars
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.get('/', IndexRoutes)
app.use('/books', BooksRoutes)

//static files
app.use(express.static(path.join(__dirname, 'public')))

//starting server
app.listen(app.get('port'), () => console.log(`server start on port ${app.get('port')}`))