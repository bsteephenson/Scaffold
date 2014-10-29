var fs = require('fs')
var handlebars = require('handlebars')


module.exports.build = function(template_file, params, callback){
	fs.readFile(template_file, 'utf8', function(err, data){
		var template = handlebars.compile(data)
		var output = template(params)
		callback(output)
	})
}