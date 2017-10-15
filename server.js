var express = require("express");
var path = require("path");
var bp = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

require("./app/routers/api-routes1.js")(app);
require("./app/routers/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});