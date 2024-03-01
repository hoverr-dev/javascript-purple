/* 
  Есть выгрузка операций пользователя
  const operations = [1000, -700, 300, -500, 10000];
  а так же начальный баланс в 100$
  Необходимо сделать функции расчёта:
  - Итогового баланса
  - Наличие отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
  - Расчёта среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const starterBalance = 100;

function getBalance(arr, initialBalance) {
	let balance = initialBalance;

	for (const el of arr) {
		balance += el;
	}
	return balance;
}
console.log(getBalance(operations, starterBalance));

function negativeBalance(arr, initialBalance) {
	let balance = initialBalance;
	let isOk = true;

	for (const el of arr) {
		balance += el;

		if (balance < 0) {
			isOk = false;
			break;
		}
	}
	return isOk;
}
console.log(negativeBalance(operations, starterBalance));

function averageBalance(arr) {
	let positiveSum = 0;
	let positiveCount = 0;
	let negativeSum = 0;
	let negativeCount = 0;

	for (const el of arr) {
		if (el > 0) {
			positiveCount++;
			positiveSum += el;
		}

		if (el < 0) {
			negativeCount++;
			negativeSum += el;
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(averageBalance(operations));
