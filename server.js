console.log("script loaded");

let express = require("express"); //it loads the library

let app = express(); //Creates an applciation
let port = 3000;
let server = app.listen(port);

app.use(express.static("public"));
console.log("running server on http://localhost:" + port);
