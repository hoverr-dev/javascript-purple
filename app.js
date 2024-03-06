/* преобразовать пользователей  до вида
{ fullName: 'Вася Пупкин', skillName: 2 }
*/

const users = [
	{
		name: 'Вася',
		surname: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'DevOps'],
	},
	{
		name: 'Катя',
		surname: 'Белова',
		age: 18,
		skills: ['Дизайн'],
	},
];

const userData = users.map(user => {
	return {
		fullName: `${user.name} ${user.surname}`,
		skillName: user.skills.length,
	};
});
console.log(userData);
