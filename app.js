
/**
 * Module dependencies.
 */

var express = require('express');
    // async = require('async'),
var stormpath = require('express-stormpath');
var apiRoutes = require('./routes');
var app = express();
// app.set('views', __dirname + '/views');



app.use(stormpath.init(app, {
  application:process.env.STORMPATH_CLIENT_APPLICATION_HREF,
  apiKeyFile: '/Users/A73740/.stormpath/apiKey-8ILTUZQZRQME76BKYYYF6CUUX.properties',
application: process.env.STORMPATH_CLIENT_APPLICATION_HREF,
secretKey: 'kdfajsfasjdfoasxjcoicslkfjqweoifjasizmomlkjjok'
}));
app.use(express.static(__dirname + '/public'));

// Configurations
//console.log(process.env);

// apiRoutes
app.get('/', apiRoutes.index);
app.get('/plans', apiRoutes.index);
// app.get('/login', apiRoutes.index);




//endpoint that returns all plan options
app.get('/plans', apiRoutes.index);

// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 3000);