var input = "[ name: Bob, lastname: Smith]  "

input = input.replace(/\[/, '')
input = input.replace(/\]/, '')

input_arr = input.split(',')

var params = {}

for(var line in input_arr){
	var keyValue = input_arr[line].split(':')
	params[keyValue[0].trim()] = keyValue[1].trim()
}

console.log(params)