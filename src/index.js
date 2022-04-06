const express = require ('express');
const app = express();
const path =require('path');
// settings
app.set('port',3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);

//middlewares

//routes
app.use(require('./routes/index'));
//Static Files
app.use(express.static(path.join(__dirname,'public')));
//listenig the server
app.listen(app.get('port'),()=>{
console.log('Server on Port 3000',app.get('port'));
});