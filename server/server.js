// Import Modules
// app
// db
// middleware
// routes
// port
// listener


// Import Modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


// app
const app = express();


// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    uSeUnifiedTopology: true
}).then(()=> console.log("DB Connected")).catch((err)=> console.log("Db Connection error", err));

// middleware
app.use(morgan('dev'));
app.use(cors({origin: true, credentials: true}));

// routes
const testRoutes = require('./routes/test')
app.use('/', testRoutes);

// port
const port = process.env.PORT || 8080; 


// listener
const server = app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

