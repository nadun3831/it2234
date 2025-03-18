//Reverse the array using push and pop
let array = ['a','b','c','d']
let newArray = []
console.log(array)

	for(let i=0; i< array.length; i++)
	{
		newArray.push(array.pop())
	}
	
	console.log(newArray)