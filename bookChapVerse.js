var result = {}

var plaid = require('lineation')('xref.txt', function(line){
	var refs = line.split('\t')

	var from = refs[0].split('.')
	var to = refs[1].split('.')

	var from_book = from[0]+''
	var from_chap = +from[1]
	var from_vers = +from[2]

	if (!result[from_book]) result[from_book] = []
	
	if (!result[from_book][from_chap]) result[from_book][from_chap] = []

	result[from_book][from_chap][from_vers] = to
},
console.log(JSON.stringify(result))
)
