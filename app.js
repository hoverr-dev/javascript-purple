/* 
  Методом prompt получите ответ пользователя
  на вопрос "Сколько будет 7 + или -15?". Если ответ верен
  выведите в консоли "Успех", если нет - "Вы - робот!",
  а если он выведет "Я не робот", то тоже "Успех".
*/

const res = prompt('Сколько будет 7 + или -15?');

switch (true) {
	case res === 'Я не робот':
	case Number(res) === 22:
	case Number(res) === -8:
		console.log('Успех');
		break;
	default:
		console.log('Вы робот!');
}
