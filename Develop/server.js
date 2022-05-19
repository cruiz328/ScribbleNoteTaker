const express = require('express');
const path = require('path');
// this creates a "server" object that we can use to listen for requests
const app = express();

const htmlRoutes = require('./routes/html')
const apiRoutes = require('./routes/api');

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Process.env is what's known as the environmental variable
const PORT = process.env.PORT || 3001;
// we can run many servers on 1 machine
// a port can only be listened to by 1 server at a time


app.get(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// make our server listen for requests on our port, to respond to any requests
app.listen(PORT, () => { 
    console.log(`Listening for port/server ${PORT}`); 
});