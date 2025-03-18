//Find the all pair that sum up to the target
let arr = [1,2,3,4,5,6]

let target = 7

for(let i=0; i< arr.length; i++)
{
	for(let j=0; j<arr.length; j++)
	{
		if(target==arr[i]+arr[j])
		{
			console.log(arr[i],arr[j])
		}
	}
}