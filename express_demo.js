var express = require('express');

var app = express();

app.get('/', function(req, res) {

    console.log('ex->get');
    res.send('home page');
});
app.post('/', function(req, res) {
    console.log(' ex->post');
    res.send('hello post');
})
app.get('/del_user', function(req, res) {
    console.log('ex->del_user');
    res.send('into del user page');
})

var server = app.listen(8001, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server localhost 8001 is running....../n')
    console.log('vister http://%s:%s', host, port);
});