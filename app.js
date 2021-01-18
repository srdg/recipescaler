const express = require("express")
const path = require("path");
const http = require("http");

const app = express();
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(3000, function () {
    console.log('Server listening on port 3000!');
  });
