

var express = require('express');
var path = require('path');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');

var fs = require('fs');
var file = "imdb-large.sqlite3.db";

var exists = fs.existsSync(file);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(file);
var _db = require('./database.js');

_db.set(db);

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(require('method-override')('_method'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes());

process.env.PORT = 3000
console.log('listening on port ', process.env.PORT);
app.listen(process.env.PORT);

// db.serialize(function() {
//     db.each("SELECT * FROM movies LIMIT 10", function(err,row) {
//       console.log(row);
//     });
// });
// db.close();