var grep = require('simple-grep')
var detect_indent = require('detect-indent')


var generator = function(file, line, line_number, callback){
	var parse_command = line.split('@')[1]
	parse_command = line.split('[')[0]

	parse_command = parse_command.replace('@', '');
	parse_command = parse_command.trim();
	parse_command = parse_command.replace('\t', '');

	var params = require('./parse_params').parse(line)
	params['content'] = require('./find_inner').inner(file, line_number)
	var end_line = require('./find_inner').end_line(file, line_number)
	var indent = detect_indent(line).indent

	require('./template_finder').find(parse_command, function(found, template_file){
		if(found){
			require('./template_builder').build(template_file, params, function(built_template){
				require('./writer').write(file, line_number, end_line, indent, built_template, callback)
			})
		}
		else{
			console.log("Command not found: " + line)
		}
	})

}



var scaffold = function(file, commands, callback){
	if(commands.length < 1){
		callback();
	}
	else{
		grep('@' + commands[0], file, function(list){
			if(list.length < 1){
				commands.shift()
				scaffold(file, commands, callback);
			}
			else{
				var result = list[0].results[0]
				generator(file, result.line, result.line_number, function(){
					scaffold(file, commands, callback)
				})
			}
		})
	}
}




module.exports = scaffold;
