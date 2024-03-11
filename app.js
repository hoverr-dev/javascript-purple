'use strict';
/* 
    дополнить объект методами для получения имени:
    - компании
    - сео
    -сотрудника
*/

const company = {
	name: 'ООО Агро',

	employees: [
		{
			name: 'Света',
			getEmployeeName: function () {
				return this.name;
			},
		},
	],
	ceo: {
		name: 'Вася',
		getCEO: function () {
			return this.name;
		},
	},
	getName: function () {
		return this.name;
	},
};

console.log(company.getName());
console.log(company.ceo.getCEO());
console.log(company.employees.map(employee => employee.getEmployeeName()));
