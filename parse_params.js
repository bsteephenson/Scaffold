module.exports.parse = function(line){
	console.log(line)

	line = line.split('[')[1]

	line = line.replace(/\[/, '')
	line = line.replace(/\]/, '')

	pairs = line.split(',')
	// pairs.shift()
	var params = {}
		console.log(pairs)

	for(var line in pairs){
		var keyValue = pairs[line].split(':')
		params[keyValue[0].trim()] = keyValue[1].trim()
	}
	// return params
}
