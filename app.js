const user = {
	name: 'Вася',
	age: 40,
	city: 'Москва',
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
	skills: ['Разработка', 'Дизайн'],
	creditCard: '2341-2314-1312-5521',
};

user.test = 'dasd';

// user = {
// 	...user,
// 	...additionalData,
// };
console.log(user);
