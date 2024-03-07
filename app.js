/* Реализовать методы увеличения и уменьшения баланса,
    при котором каждая операция сохраняется в массив
    operations в виде { reason: 'Оплата налогов', sum: -100 }.
    Возвращается true, если успешно и false, если не хватает баланса
    Так же реализовать метод вывода числа операций по кошельку
*/

const wallet = {
	balance: 0,
	operations: [],
	increase: function (sum, reason) {
		this.balance += sum;
		this.operations.push({
			reason: reason,
			sum: sum,
		});
		return true;
	},
	decrease: function (sum, reason) {
		if (this.balance < sum) {
			console.log('Недостаточно средств');
			return false;
		}
		this.balance -= sum;
		this.operations.push({
			reason: reason,
			sum: -sum,
		});
		return true;
	},
	getOperationsLength: function () {
		return this.operations.length;
	},
};

console.log(wallet.increase(1000, 'покупка ноутбука'));
console.log(wallet.getOperationsLength());
console.log(wallet.decrease(1500, 'покупка смартфона'));
console.log(wallet.getOperationsLength());
console.log(wallet.decrease(500, 'покупка смартфона'));
console.log(wallet.getOperationsLength());
console.log(wallet.balance);
console.log(wallet.operations);
