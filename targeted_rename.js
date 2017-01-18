const fs = require('fs')
const glob = require('glob')

// glob('**/0??.en.txt', function(error, files){
// 	if (error) console.error(error)

// 	for (file of files)
// 		fs.unlink(file)
// })

// glob('**/?.en.txt', function(error, files){
// 	if (error) console.error(error)

// 	for (file of files)
// 		fs.unlink(file)
// })

glob('**/????.en.txt', function(error, files){
	if (error) console.error(error)

	for (file of files)
		fs.unlink(file)
})
