var fs = require('fs')
var handlebars = require('handlebars')

fs.readFile('test_handlebars.html', 'utf8', function(err, data){
	var template = handlebars.compile(data)
	var context = {title: "My New Post", body: "This is my first post!"}
	var html    = template(context);
	console.log(html)
});


