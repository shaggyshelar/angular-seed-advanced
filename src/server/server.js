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
require('./admin/features/features')(app);
require('./roles/roles')(app);
require('./corporate/conferenceBooking/conferenceBooking')(app);
require('./corporate/ticket/ticket')(app);
require('./profiles/profiles')(app);
require('./achievements/achievements')(app);
require('./certificates/certificates')(app);
require('./skills/skills')(app);
require('./experience/experience')(app);
require('./employmentHistory/employmentHistory')(app);
require('./education/education')(app);
require('./address/address')(app);
require('./identityProof/identityProof')(app);
require('./nominees/nominees')(app);
require('./passport/passport')(app);
require('./uan/uan')(app);
require('./visa/visa')(app);
require('./leave/leave')(app);
require('./holidays/holiday')(app);

app.get('/', function (req, res) {
    res.render('index.html');
});

server.listen(process.env.PORT || 4000, function () {
    console.log('APP listening on port 4000!');
});