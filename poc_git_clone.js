var clone = require('git-clone')

clone('https://github.com/BSteephenson/Scaffold.git', 'scaffold/someDir', function(){
	console.log('done')
})