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
submitBtn.onclick = checkAnswer;

function clearWindow() {
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion() {
	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;

	let answerNumber = 1;
	for(answerText of questions[questionIndex]['answers']){
		const questionTemplate = `
			<li>
				<label>
					<input type="radio" class="answer" name="answer" value="%number%" />
					<span>%answer%</span>
				</label>
			</li>`
		const answerHTML = questionTemplate
							.replace('%answer%', answerText)
							.replace('%number%', answerNumber)
		listContainer.innerHTML += answerHTML;

		answerNumber++;
	}
}

function checkAnswer(){
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	if(!checkedRadio) {
		submitBtn.blur();
		return
	}
	const userAnswer = parseInt(checkedRadio.value);

	if(userAnswer === questions[questionIndex]['correct']){
		score++;
	}

	if(questionIndex !== questions.length - 1 ){
		questionIndex++;
		clearWindow();
		showQuestion();
	} else {
		clearWindow();
		showResults();
	}
}

function showResults() {
	const resultsTemplate = `
		<h2 class='title'>%title%</h2>
		<h3 class='summary'>%message%</h3>
		<p class='result'>%result%</p>
		`;
	let title, message;
	if(score === questions.length){
		title = 'Красава 💋!'
		message = 'Все ответы верны, задрот(ка) 🤓'
	} else if((score * 100) / questions.length >= 50){
		title = 'Ну так себе результат 😐'
		message = 'Мог(ла) бы и получше 🙄'
	}else {
		title = 'Мда 🤐'
		message = 'Иди учи 🤣'
	}

	let result = `${score} из ${questions.length}`;

	const finalMessage = resultsTemplate
						.replace('%title%', title)
						.replace('%message%', message)
						.replace('%result%', result)

	headerContainer.innerHTML = finalMessage;

	submitBtn.blur();
	submitBtn.innerText = 'Начать заново';
	submitBtn.onclick = () => history.go();
}



