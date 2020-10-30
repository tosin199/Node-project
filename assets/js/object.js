var person = new Object();
person.firstName = "Excellency";
person.lastName = "Tosin";
person.age = 40;
person.complexion = "light";
document.getElementById("description").innerHTML = person.firstName + person.lastName + "is" + person.age + "years old" + "and" + person.complexion + "in complexion.";
var http = request ('http');
var url = require('url');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type'; 'text/index.html'});
})
server.listen(8081, '127.0.0.1');
console.log('Hey, now listening to port 8081');