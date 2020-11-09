const express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const app = express();
const cors = require("cors")
require('dotenv').config()

const PORT = process.env.PORT || 4000;

const router = require('./routes')
const errorHandling = require('./middlewares/errorHandling')

//Middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));


//Routes
app.use(router);
app.use(errorHandling);

app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
})

