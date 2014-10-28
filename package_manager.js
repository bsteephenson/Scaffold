module.exports.install = function(name, git_repo){
	var clone = require('git-clone')

	clone(git_repo, 'scaffold/' + name, function(){
		console.log('Installed ' + name + ' into scaffold/'  + name)
	})
}