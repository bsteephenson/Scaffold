
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

module.exports.find = function(command, callback){
	createPath(command, 'scaffold', function(path){
		fs.exists(path, function(exists){
			callback(exists, path)
		})
	})
}