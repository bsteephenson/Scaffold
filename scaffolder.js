var grep = require('simple-grep')
var detect_indent = require('detect-indent')


var generator = function(file, line, line_number, callback){
	var parse_command = line.split('@')[1]
	parse_command = line.split('[')[0]
	parse_command = parse_command.trim();

	var inner_conent = require('./find_innner').inner(file, line_number)
	var params = require('./parse_params').parse(line)
	var indent = detect_indent(line).indent

	require('./template_finder').find(parse_command, function(found, template_file){
		if(found){
			require('./template_builder').build(template_file, params, inner_conent, function(built_template){
				require('./writer').write(file, line, indent, built_template, callback)
			})
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
				var result = list[0].result
				generator(file, result.line, result.line_number, function(){
					scaffold(file, commands, callback)
				})
			}
		})
	}
}




module.export = scaffold;
