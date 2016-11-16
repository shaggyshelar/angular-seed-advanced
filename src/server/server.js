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

// Remove below code on production
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5555');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
};
app.use(allowCrossDomain);
// Remove above code on production

app.get('/', function (req, res) {
    res.render('index.html');
});

server.listen(process.env.PORT || 4000, function () {
    console.log('APP listening on port 4000!');
});