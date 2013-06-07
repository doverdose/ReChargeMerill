var express = require('express')
  , routes = require('./routes');
var app = express();

app.set('view', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

app.listen(3000);
console.log('Listening on port 3000');