var express = require('express'),
    app = express(),
    server = require('http').createServer(app);
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use('/node_modules', express.static(__dirname + '/../../node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./apis')(app);
require('./features/features')(app);
require('./roles/roles')(app);
require('./leave/leave')(app);
require('./holidays/holiday')(app);

app.get('/', function (req, res) {
    res.render('index.html');
});

server.listen(process.env.PORT || 4000, function () {
    console.log('APP listening on port 4000!');
});