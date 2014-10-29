module.exports.parse = function(line){
	var params = {}

	if(line.split('[').length > 1){
		line = line.split('[')[1]

		line = line.replace(/\[/, '')
		line = line.replace(/\]/, '')

		pairs = line.split(',')
		// pairs.shift()

		for(var line in pairs){
			var keyValue = pairs[line].split(':')
			params[keyValue[0].trim()] = keyValue[1].trim()
		}
	}
	return params
}
