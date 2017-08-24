/* var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('hello,world');
}).listen(8080);
console.log('server running  locahost:8080');
 */

/* 
//  事件
var event = require('events');
var eventEmitter = new event.EventEmitter();
//定义事件函数
var eventHandle = function() {
        console.log('连接成功');
        eventEmitter.emit('dataReceive');
    }
    //绑定事件
eventEmitter.on('connection', eventHandle);

//绑定自定义事件
eventEmitter.on('dataReceive', function() {
    console.log('接收成功');
});
//触发事件
eventEmitter.emit('connection');

console.log('end..............'); */