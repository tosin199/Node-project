var http = require ('http');
var server = http.createServer(function(req,res){
    res.writeHead(200, {'COntent-Type':'text/plain'});
    res.end('Javascript practice on function,object,json,class and callback');
});

server.listen(8081,'127.0.0.1');
console.log('Hey Javascript, now listening to port 8081');

var person= {
    firstName = "Excellency",
    lastName = "Tosin",
    language = "Swahili",
    };
    Object.defineProperty(person, "language", {value:"light"})
    document.getElementById("demo").innerHTML = person.language;

    
    