const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "Какое свойство определяет уровень прозрачности элемента",
		answers: [
			"transition",
			"opacity",
			"transparency",
			"transform",
		],
		correct: 2,
	},
	{
		question: "Что из перечиленного ниже имеет наибольшую приоритетность в CSS?",
		answers: [
			"Селектор id",
			"inline - стиль",
			"Селектор класса",
			"Селектор тега",
		],
		correct: 2,
	},
	{
		question: "Какая единица соотвествует 1% ширины окна браузера?",
		answers: [
			"vh",
			"vw",
			"rem",
			"em",
		],
		correct: 2,
	},
	{
		question: "Как создавать класс в JavaScript?",
		answers: [
			"function MyClass() {...}",
			"var MyClass = function() {...}",
			"class = MyClass {...}",
			"class MyClass {...}",
		],
		correct: 4,
	},
	{
		question: "Какой тип данных возвращает оператор typeof для значения null?",
		answers: [
			"null",
			"object",
			"symbol",
			"Ошибка",
		],
		correct: 2,
	},
	{
		question: "Какой оператор в JavaScript проверяет, является ли значение ложным (false)?",
		answers: [
			"==",
			"!",
			"!==",
			"&&",
		],
		correct: 2,
	},
	{
		question: "Какой селектор в CSS выбирает все элементы на странице?",
		answers: [
			"*",
			"body",
			"html",
			"all",
		],
		correct: 1,
	},
	{
		question: "Какой оператор в JavaScript проверяет значение и тип данных?",
		answers: [
			"==",
			"=",
			"===",
			"!=",
		],
		correct: 3,
	},
	{
		question: "Какой метод в JavaScript удаляет последний элемент из массива?",
		answers: [
			"array.unshift()",
			"array.shift()",
			"array.pop()",
			"array.push()",
		],
		correct: 3,
	},
	{
		question: "Какой метод в JavaScript переводит строку в число?",
		answers: [
			"parseInt()",
			"parseFloat()",
			"toNumber()",
			"toString()",
		],
		correct: 1,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

clearWindow();
showQuestion();

function clearWindow() {
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}


function showQuestion() {
	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;

	questions[questionIndex]['question']
	for(answerText of questions[questionIndex]['answers']){
		const questionTemplate = `
			<li>
				<label>
					<input type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>`
		const answerHTML = questionTemplate.replace('%answer%', answerText);
		listContainer.innerHTML += answerHTML;
	}
}