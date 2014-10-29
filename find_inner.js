var detect_indent = require('detect-indent')

module.exports.inner = function(file, line_number){
	var file_lines = require('fs').readFileSync(file, 'utf8').split('\n');
	var line = line_number - 1

	var indent = detect_indent(file_lines[line]).amount;
	var inner = ""
	for(var i = line + 1; i < file_lines.length; i++){
		if(detect_indent(file_lines[i]).amount <= indent){
			break;
		}
		else{
			var this_line = file_lines[i]
			//remove indent + 1 number of indents
			var this_indent = detect_indent(this_line)
			var how_many_times = this_indent.amount - indent - 1;
			var generated_indent = '';
			for(var j = 0; j < how_many_times; j++){
				generated_indent = generated_indent + this_indent.indent.charAt(0)
			}

			inner = inner + generated_indent + this_line.trim() + "\n"
		}
	}
	return inner.trim()
}

module.exports.end_line = function(file, line_number){
	var file_lines = require('fs').readFileSync(file, 'utf8').split('\n');
	var line = line_number - 1

	var indent = detect_indent(file_lines[line]).amount;
	var inner = ""
	for(var i = line + 1; i < file_lines.length; i++){
		if(detect_indent(file_lines[i]).amount <= indent){
			console.log(i)
			return i;
		}
	}
}