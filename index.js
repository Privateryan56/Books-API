const mongoose = require('mongoose');
const express = require('express');
const methodOverride = require('method-override');
const app = express();

require('dotenv').config();

//Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(cors())

//mongoose
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(" connected!");
    }
  );

//main page
app.get('/', (req,res)=>{
    res.send('<p>hello </p>')
})

//book controllers
const booksController= require('./controllers/books-controllers')
app.use('/books', booksController)


//listen
app.listen(process.env.PORT, function(){
    console.log('Server On')
})