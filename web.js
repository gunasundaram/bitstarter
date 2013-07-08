var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    fs = require('fs');
    var fileContent = fs.readSyncFile("Index.html");
    var result = fileContent.toString();
    response.send(result);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
