//imports
const express = require('express');
const routes = require('./routes')

//app
const app = express();
app.use(routes)
app.listen(9080); //porta de acesso da aplicação 


