var express = require('express');

//create our app

var app = express();

const PORT = process.env.PORT || 3000;

console.log('PORT IS:'+PORT);

//express middleware.check if the request is http or https


app.use(function (req, res, next){
     if(req.headers['x-forwarded-proto'] === 'https'){
         res.redirect('http://'+ req.hostname + req.url);
          
     }else{
          next();
     }
});


app.use(express.static('public'));

app.listen(PORT,function(){
     console.log('Express server is up in '+PORT);
});