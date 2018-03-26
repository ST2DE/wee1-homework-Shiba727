const express = require('express');
const app = express(); // build an Express server


app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine','ejs'); // must install ejs first: npm install ejs --save

app.get('/about_me', function(req, res){
    var user = {name: req.query.name};
    res.render('index', {user: user});

});


app.listen(3000,function(){
	console.log('Example app is running on port 3000 now');
})