var express = require('express');

var app = express();
var fs = require('fs');

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf8', function(err, data) {

        console.log(data);
        res.end(data);
    });
});
app.get('/:id', function(req, res) {
    console.log(req.params)
})
var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running  is %s%s.......', port, host);
})