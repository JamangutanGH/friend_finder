//dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//declaring express
var app = express();
//middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

//port 
var port = process.env.PORT || 3050;
app.listen(port, (req, res) => console.log(`Listening on port ${port}....`));