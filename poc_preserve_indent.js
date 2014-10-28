var fs = require('fs')
var detectIndent = require('detect-indent')

fs.readFile('poc_preserve_indent.html', 'utf8', function(err, data){
	//get indent of line 2
	var line2 = data.split('\n')[1]
	var indent = detectIndent(line2).indent	

	fs.readFile('poc_handlebars.html', 'utf8', function(err2, data2){
		var lines = data2.split('\n')
		var output = '';
		for(index in lines){
			output = output + indent + lines[index] + '\n'
		}
		data = data.replace(line2, output)
		console.log(data)
	})

})