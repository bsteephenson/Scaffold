var package_manager = require('./package_manager')
var scaffolder = require('./scaffolder')

var argv = require('minimist')(process.argv.slice(2));

if('install' in argv){
	var name = argv.install
	var git_repo = argv._[0]
	package_manager.install(name, git_repo)
}
else{
	var file = argv._[0]
	argv._.shift()
	var commands = argv._
	
	scaffolder(file, commands, function(){
		console.log("All done.")
	})
}