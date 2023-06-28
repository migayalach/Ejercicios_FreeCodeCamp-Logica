function shift(arr) {
  return arr.shift();
}

function tam(arr) {
  return arr.length;
}

function busqueda(arr1, arr2) {
  const newArr = [];
	let n = arr1.length;
	let x = shift(arr1);
	let y = shift(arr2);
	for(let i = 0; i < n; i++){
		if(x===y){
			x = shift(arr1);
			y = shift(arr2);
		}else{
			newArr.push(x);
			y = shift(arr2);
		}
	}
	console.log(newArr);
  return newArr;
}

function diffArray(arr1, arr2) {
  if (arr1.length > arr2.length) return busqueda(arr1, arr2);
  return busqueda(arr2, arr1);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);