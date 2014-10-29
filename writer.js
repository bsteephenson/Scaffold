var fs = require('fs')
module.exports.write = function(file, line_number, end_line, indent, built_template, callback){
	fs.readFile(file, 'utf8', function(err, data){
		var built_lines = built_template.split('\n')
		console.log(line_number + ' ' + end_line)
		var data_lines = data.split('\n')
		output = ''
		for(var i = 0; i < line_number - 1; i++){
			output = output + data_lines[i] + '\n'
		}
		
		for(index in built_lines){
			output = output + indent + built_lines[index] + '\n'
		}

		for(var i = end_line; i < data_lines.length; i++){
			output = output + data_lines[i] + '\n'			
		}
		fs.writeFile(file, output.trim(), function(){
			callback()
		})

	})
}