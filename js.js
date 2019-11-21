function valid (form){
let arr1 = form.arr1.value;
let arr2 = form.arr2.value;
arr1=arr1.split(" ").filter(Number && String);
arr2=arr2.split(" ").filter(Number && String);
if (arr1.length==0 && arr2.length==0){
	document.getElementsByClassName("number")[0].innerHTML = "Длина первого и второго массива равны 0";
}
else if(arr1.length<9) {
	document.getElementsByClassName("number")[0].innerHTML = "Длина первого массива меньше 9";
}
else if(arr1.length>9) {
	document.getElementsByClassName("number")[0].innerHTML = "Длина первого массива больше 9";
}
else if (arr2.length>9){
	document.getElementsByClassName("number")[0].innerHTML = "Длина второго массива больше 9";
}
else{
	let new_arr = arr1.map(function(value){
		if(arr2.indexOf(value)==-1){
		return 0; 
		}
		else{ 
		return 1;
		}
	});
arr = new_arr.join('');
document.getElementsByClassName("number")[0].innerHTML = arr;
}	
}
