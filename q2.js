

//Q2. Write a JavaScript function that takes an array and a value and search that value in the given array. 
//Write a function which takes two arguments - an array and a value. 
//If the value provided in the argument is found in the array, the function should return the position of the element in an array. 
//If the element is not found, the function should return "-1". 

//Test the code by defining an array and pass that array as an argument in your function.  



var arr = ['kapil','shivam','aakash','govind','abhishek'];

function name_index(arr, value){
	
	for (let i=0; i<arr.length; i++){

			if(arr[i] == value){
			return i;
		}
	}

	return -1;
} 
	
console.log(name_index(arr,'abhishek'));
	