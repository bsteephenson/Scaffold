var detectIndent = require('detect-indent')
var file = require('fs').readFileSync('poc_handlebars.html', 'utf8').split('\n');

// for(var i = 0; i < file.length; i++){
// 	console.log(detectIndent(file[i]).amount)
// }

var line = 1; //start count at 1 cuz that's how line numbers typically work

line = line - 1;

var indent = detectIndent(file[line]).amount;
for(var i = line + 1; i < file.length; i++){
	if(detectIndent(file[i]).amount <= indent){
		break;
	}
	else{
		console.log(file[i])
	}
}