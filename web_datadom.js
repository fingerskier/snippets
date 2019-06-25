			var units = {}

			fetch("https://some.url")
			.then((response)=>{
				return response.json()
			})
			.then((data)=>{
				units = data

				let container = document.querySelectorAll('#container')[0]
				let list = document.createElement('ul')

				console.log(data.columns)
				
				data.rows.forEach((row)=>{
					let thisn = document.createElement('li')

					thisn.dataset.id = row[0]
					thisn.innerText = row[5]

					list.appendChild(thisn)
				})

				container.appendChild(list)
			})
