/* 
  Дан произвольны url - 
  'https://purpleschool.ru/course/javascript'
  Нужно сделать функцию, которая выводит в консоль:
  - Протокол (https)
  - Доменное имя (purpleschool.ru)
  - Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';
const url2 = 'https://purpleschool.ru/course/javascript';

function getUrlData(link) {
	const [protocol, _, host, ...path] = link.split('/');
	if (protocol === 'https:' || protocol === 'http:') {
		if (!host.includes('.')) return;
		console.log(protocol, host, path);
		console.log(`Протокол: ${protocol.split(':')[0]}`);
		console.log(`Доменное имя: ${host}`);
		console.log(`Путь внутри сайта: /${path.join('/')}`);
	}
}

getUrlData(url);
