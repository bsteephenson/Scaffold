var detectIndent = require('detect-indent')
var file = require('fs').readFileSync('poc_handlebars.html', 'utf8').split('\n');
// tries to detect the indentation and falls back to a default if it can't
for(var i = 0; i < file.length; i++){
	console.log(detectIndent(file[i]).amount)
}