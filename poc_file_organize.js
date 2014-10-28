/*
so we can get something like
poc.file.organize.test.thing
even though the actual path is
poc.file.organize/test.thing
*/

var input = 'a.directory.a.file';
var fs = require('fs')

var exec = require('child_process').exec;


function createPath(left, path, callback){
	if(left == ''){
		callback(path);
	}
	else{
		var firstDot = left.indexOf('.')
		var next = ''
		var nextLeft = ''
		if(firstDot > -1){
			next = left.slice(0, firstDot)
			nextLeft = left.substring(firstDot + 1)
		}
		else{
			next = left;
			nextLeft = ''
		}
		if(path == ''){
			createPath(nextLeft, next, callback)
		}
		else{
			exec('find ' + path + '/' + next + '*', function(err, stdin, stdout){
				var splitResult = stdin.split('\n')
				if(splitResult.length > 1){
					path = path + '/' + next;
				}
				else{
					path = path + '.' + next;
				}
				createPath(nextLeft, path, callback)
			})
		}



	}
}

createPath(input, 'poc.file.organize', function(path){
	console.log(path)
})