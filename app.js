/* 
  Написать функцию, которая возвращает true,
  если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];

function some(array, element) {
	const res = array.find(el => el === element);
	return res === undefined ? false : true;
}
console.log(some(arr, 1));

const result = arr.some(el => el === 2);
console.log(result);
